<script setup lang="ts">
const { data: page } = await useAsyncData('entries', () => queryContent('entries').findOne())
const { data: blog } = await useAsyncData('blog', () => queryContent('/blog').sort({ createdAt: -1 }).find())

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

<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero" />

    <ULandingSection>
      <ULandingGrid class="lg:grid-cols-1 max-w-2xl mx-auto">
        <ULandingCard
          v-for="(item, index) of blog"
          :key="index"
          :to="item._path"
          orientation="horizontal"
        >
          <template #container>
            <div class="flex items-start gap-4">
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
              </div>
            </div>
          </template>
        </ULandingCard>
      </ULandingGrid>
    </ULandingSection>
  </UContainer>
</template>
