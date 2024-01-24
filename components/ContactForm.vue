<template>
  <form name="contact" method="post" class="hidden" netlify-honeypot="bot-field" data-netlify="true">
    <input type="text" name="name">
    <input type="text" name="email">
    <input type="text" name="bot-field">
    <textarea name="message" />
    <button type="submit">
      Send
    </button>
  </form>

  <UModal
    :prevent-close="Object.values(state).some(Boolean)"
    :model-value="modelValue"
    :ui="{ wrapper: 'z-[1001]' }"
    @update:model-value="close"
  >
    <ULandingCTA
      v-if="sent"
      title="Vielen Dank!"
      description="Ihr Formular wurde erfolgreich gesendet."
      :links="[{
        label: 'Schlie&szlig;en',
        color: 'primary',
        size: 'md',
        icon: 'i-heroicons-x-mark-20-solid',
        click: close
      }]"
    />

    <ULandingCTA
      v-else-if="error"
      title="Oops!"
      description="Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es sp&auml;ter erneut."
      :links="[{
        label: 'Zur&uuml;ck zum Formular',
        color: 'gray',
        size: 'md',
        icon: 'i-heroicons-arrow-left-20-solid',
        click: () => { Object.assign(state, lastCommit), error = false }
      }, {
        label: 'Schlie&szlig;en',
        color: 'gray',
        size: 'md',
        icon: 'i-heroicons-x-mark-20-solid',
        click: close
      }]"
    />

    <div v-else class="p-4">
      <div class="flex items-start justify-between pb-5">
        <div class="flex items-center space-x-3">
          <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="text-2xl text-primary" />
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Kontaktformular
          </h2>
        </div>

        <UButton
          color="gray"
          variant="ghost"
          class="-mt-3 -mr-3 p-2"
          aria-label="Schlie&szlig;en"
          @click="$emit('update:model-value', false)"
        >
          <UIcon name="i-heroicons-x-mark-20-solid" class="text-3xl !p-4" />
        </UButton>
      </div>

      <UForm
        ref="formRef"
        :schema="schema"
        :state="state"
        class="space-y-4"
        name="contactForm"
        @submit="handleSubmit"
      >
        <UFormGroup name="name">
          <template #label>
            Name<span class="text-red-700">*</span>
          </template>
          <UInput v-model="state.name" autofocus />
        </UFormGroup>

        <UFormGroup name="email">
          <template #label>
            E-Mail<span class="text-red-700">*</span>
          </template>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup name="bot-field" class="hidden">
          <template #label>
            Don&apos;t fill this out if you&apos;re human
          </template>
          <UInput name="bot-ield" />
        </UFormGroup>

        <UFormGroup name="message">
          <template #label>
            Nachricht<span class="text-red-700">*</span>
          </template>
          <UTextarea v-model="state.message" autoresize />
        </UFormGroup>

        <div class="text-right">
          <UButton v-if="complete" type="submit" trailing-icon="i-heroicons-paper-airplane">
            Mail senden
          </UButton>

          <UTooltip
            v-else
            :ui="{ base: 'text-sm !text-amber-500 h-7'}"
            text="F&uuml;llen Sie alle erforderlichen Felder!"
          >
            <UButton type="submit" trailing-icon="i-heroicons-paper-airplane" disabled>
              Mail senden
            </UButton>
          </UTooltip>
        </div>
      </UForm>
    </div>
  </UModal>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const formRef = ref(null)

const complete = computed(() => Object.values(state).every(Boolean))

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:model-value'])

const state = reactive({
  email: '',
  name: '',
  message: ''
})

const sent = ref(false)
const lastCommit= reactive<Partial<typeof state>>({})
const error = ref(false)

const schema = object({
  email: string().email('E-Mail ung\u00fcltig')
})

type Schema = InferType<typeof schema>

async function close () {
  for (const key in state) {
    lastCommit[key] = state[key] = ''
  }
  emit('update:model-value', false)
  setTimeout(() => {
    error.value = sent.value = false
  }, 200)
}

function encode (data: Record<string, string>) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join('&')
}

async function handleSubmit (e: FormSubmitEvent<Schema>) {
  try {
    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...e.data })
    })
    sent.value = true
    for (const key in state) {
      state[key] = undefined
    }
  } catch (e) {
    Object.assign(lastCommit, e.data)
    error.value = true
    console.log(e)
  }
}
</script>
