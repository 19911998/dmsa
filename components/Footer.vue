<script setup lang="ts">
const { footer } = useAppConfig()
</script>

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
          target="_blank"
          to="/rss.xml"
          aria-label="RSS Feed"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>
