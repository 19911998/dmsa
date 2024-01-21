<template>
  <form netlify>
    <input type="text" name="name" value="">
    <input type="text" name="email" value="">
    <textarea name="message" value="" />
    <input type="hidden" name="form-name" value="contactForm">
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
        :state="state"
        class="space-y-4"
        name="contactForm"
        @submit="handleSubmit"
      >
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Nachricht" name="message">
          <UTextarea v-model="state.message" autoresize />
        </UFormGroup>

        <div class="text-right">
          <UButton type="submit">
            Mail senden
          </UButton>
        </div>
      </UForm>
    </div>
  </UModal>
</template>

<script setup lang="ts">
const formRef = ref(null)

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:model-value'])

const state = reactive({
  email: '',
  name: '',
  message: ''
})

function encode (data: Record<string, string>) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join('&')
}

function handleSubmit () {
  $fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contactForm', ...state })
  })
}
</script>
