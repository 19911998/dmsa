<template>
  <UFooter :links="footer?.links">
    <template #left>
      <span v-html="footer.credits" />
    </template>

    <template #right>
      <ContactForm
        v-if="footer?.buttons.some(_ => _.contactForm)"
        v-model="openContactForm"
      />

      <UTooltip v-for="(btn, i) in footer?.buttons" :key="i" :text="btn.label" placement="top">
        <UButton
          v-if="btn.contactForm"
          :icon="btn.icon"
          variant="ghost"
          color="gray"
          :aria-label="btn.label"
          @click="openContactForm = true"
        />

        <UButton
          v-else
          :icon="btn.icon"
          variant="ghost"
          color="gray"
          :to="(btn.abspath ? useRuntimeConfig().public.site_url : '') + btn.to"
          :aria-label="btn.label"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue'

const { data: footer } = await useAsyncData('footer', () => queryContent('_footer').findOne())

const openContactForm = ref(false)
</script>
