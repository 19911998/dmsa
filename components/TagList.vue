<template>
  <div v-if="tags" class="flex gap-x-2">
    <UBadge
      v-for="tag of tagsArr"
      :key="tag"
      class="z-50"
      size="md"
      :color="tag === pageTag ? 'primary' : 'gray'"
    >
      <NuxtLink :to="(tag === pageTag) ? base : base + '?tag=' + tag" class="flex items-center gap-x-2">
        <UIcon name="i-heroicons-tag" />
        {{ tag }}
      </NuxtLink>
    </UBadge>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  base: string
  tags?: string
  pageTag?: string
}>()

const tagsArr = computed(() => props.tags?.split(' '))
</script>
