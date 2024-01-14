<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter :links="footer?.links">
    <template #left>
      <span v-html="footer.credits" />
    </template>

    <template #right>
      <UButton
        v-for="(link, index) of footer?.icons"
        :key="index"
        class="hidden lg:block"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>
  </UFooter>
</template>
