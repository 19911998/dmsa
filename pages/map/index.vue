<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero" />
  
    <ULandingSection>
      <ULandingGrid class="lg:grid-cols-1 max-w-full w-672 mx-auto">
        <ULandingCard
          v-for="(item, index) of entries"
          :key="index"
          :to="item?._path"
        >
          <template #container>
            <div class="flex flex-col md:flex-row items-start gap-4">
              <div class="w-full">
                <div class="text-2xl mb-1 text-gray-900 dark:text-white font-bold">
                  <MDC :value="item.title" />
                </div>

                {{ item.meta }}

                <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                  <MDC :value="item.description" />
                </div>
              </div>
            </div>
          </template>
        </ULandingCard>
      </ULandingGrid>
    </ULandingSection>
  </UContainer>
</template>
  
<script setup lang="ts">
const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').sort({ createdAt: -1 }).find())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>
  