<template>
  <div v-if="tags" class="flex gap-x-2">
    <UBadge
      v-for="tag of tags"
      :key="tag"
      class="z-50"
      :color="tag === pageTag ? 'primary' : 'gray'"
    >
      <NuxtLink
        :to="(tag === pageTag) ? base : base + '?tag=' + encodeURIComponent(tag)"
        class="flex items-center gap-x-2"
      >
        <UIcon name="i-heroicons-tag" />
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
