<template>
  <ULandingSection class="max-w-full w-[42rem] mx-auto" :ui="{ container: '!px-0' }">
    <ULandingCard
      v-for="(item, index) of entries"
      :key="index"
      :to="item?._path"
    >
      <template #container>
        <div class="flex flex-col md:flex-row items-start gap-4">
          <NuxtImg
            v-if="item.image"
            :src="item.image.src"
            :alt="item.image.alt"
            preset="blog"
            width="250"
            height="150"
          />

          <div class="w-full">
            <div class="text-2xl mb-1 text-gray-900 dark:text-white font-bold">
              <MDC :value="item.title" />
            </div>

            <div class="mb-4 text-slate-500 dark:text-slate-400 text-sm flex items-center gap-x-2">
              <UIcon name="i-heroicons-calendar" />
              {{ getCreationDate(item) }}
            </div>

            <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
              <MDC :value="item.description" />
            </div>

            <TagList base="/blog" :tags="item.tags" :page-tag="pageTag" class="mt-4" />
          </div>
        </div>
      </template>
    </ULandingCard>
  </ULandingSection>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  entries: Omit<ParsedContent, 'body'>[]
  pageTag?: string
}>()
</script>