<template>
  <form name="contact" method="post" class="hidden" netlify>
    <input type="text" name="name">
    <input type="text" name="email">
    <textarea name="message" />
    <button type="submit">Send</button>
  </form>

  <UModal
    :prevent-close="Object.values(state).some(Boolean)"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <div class="p-4">
      <div class="flex items-center justify-between pb-4">
        <h3 class="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
          Kontaktformular
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          size="xl"
          class="-my-1"
          @click="$emit('update:model-value', false)"
        />
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
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup name="email">
          <template #label>
            E-Mail<span class="text-red-700">*</span>
          </template>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup name="message">
          <template #label>
            Nachricht<span class="text-red-700">*</span>
          </template>
          <UTextarea v-model="state.message" autoresize />
        </UFormGroup>

        <div class="text-right">
          <UButton v-if="complete" type="submit">
            Mail senden
          </UButton>

          <UTooltip
            v-else
            :ui="{ base: 'text-sm !text-amber-500 h-7'}"
            text="F&uuml;llen Sie alle erforderlichen Felder!"
          >
            <UButton type="submit" disabled>
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

defineEmits(['update:model-value'])

const state = reactive({
  email: undefined,
  name: undefined,
  message: undefined
})

const schema = object({
  email: string().email('E-Mail ung\u00fcltig')
})

type Schema = InferType<typeof schema>

function encode (data: Record<string, string>) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join('&')
}

function handleSubmit (e: FormSubmitEvent<Schema>) {
  $fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...e.data })
  })
}
</script>
