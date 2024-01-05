<template>
  <div v-if="tags" class="flex gap-x-2">
    <UBadge
      v-for="tag of tagsArr"
      :key="tag"
      class="z-50"
      :color="tag === pageTag ? 'primary' : 'gray'"
    >
      <NuxtLink :to="(pageTag === tag) ? '/blog/' : '/tags/' + tag" class="flex items-center gap-x-2">
        <UIcon name="i-heroicons-tag" />
        {{ tag }}
      </NuxtLink>
    </UBadge>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tags?: string
  pageTag?: string
}>()

const tagsArr = computed(() => props.tags?.split(' '))
</script>
