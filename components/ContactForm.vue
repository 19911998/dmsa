<template>
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

      <UForm :state="state" class="space-y-4" netlify>
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
</script>
