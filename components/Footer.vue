<template>
  <UFooter :links="footer?.links">
    <template #left>
      <span v-html="footer.credits" />
    </template>

    <template #right>
      <UTooltip text="RSS Feed" placement="top">
        <UButton
          icon="i-heroicons-rss"
          variant="ghost"
          color="gray"
          :to="`${useRuntimeConfig().public.site_url}/rss.xml`"
          aria-label="RSS Feed"
        />
      </UTooltip>

      <ContactForm v-model="openContactForm" />

      <UTooltip text="Kontaktformular" placement="top">
        <UButton
          icon="i-heroicons-envelope"
          variant="ghost"
          color="gray"
          aria-label="Kontaktformular"
          @click="openContactForm = true"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'

const { footer } = useAppConfig()

const openContactForm = ref(false)
</script>
