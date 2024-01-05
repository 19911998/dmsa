<template>
  <ULandingSection>
    <ULandingGrid class="lg:grid-cols-1 max-w-2xl mx-auto">
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

            <div>
              <div class="text-2xl mb-1 text-gray-900 dark:text-white font-bold truncate">
                <MDC :value="item.title" />
              </div>

              <div class="mb-4 text-sky-600 dark:text-sky-300 text-sm flex items-center gap-x-2">
                <UIcon name="i-heroicons-clock" />
                {{ getCreationDate(item) }}
              </div>

              <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                <MDC :value="item.description" />
              </div>

              <TagList :tags="item.tags" :page-tag="pageTag" class="mt-4" />
            </div>
          </div>
        </template>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  entries: ParsedContent[]
  pageTag?: string
}>()
</script>