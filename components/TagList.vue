<template>
  <div v-if="tags" class="flex gap-x-2">
    <UBadge
      v-for="tag of tags"
      :key="tag"
      class="z-50"
      :variant="tag === pageTag ? 'solid' : 'subtle'"
      color="primary"
    >
      <NuxtLink
        :to="(tag === pageTag) ? base : base + '?tag=' + encodeURIComponent(tag)"
        class="flex items-center gap-x-2"
      >
        {{ tag }}
      </NuxtLink>
    </UBadge>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  base: string
  tags?: string[]
  pageTag?: string
}>()
</script>
