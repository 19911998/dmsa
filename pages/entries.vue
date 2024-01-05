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
      <ULandingCard
        v-for="(item, index) of blog"
        :key="index"
        v-bind="item"
        :to="item._path"
        class="mx-auto"
        orientation="horizontal"
      >
        <template #description>
          <div class="text-sky-600 dark:text-sky-300 text-sm flex items-center gap-x-2">
            <UIcon name="i-heroicons-clock" />
            {{ getCreationDate(item) }}            
          </div>
          {{ item.description }}
        </template>

        <NuxtImg
          v-if="item.image"
          :src="item.image.src"
          :alt="item.image.alt"
          preset="blog"
        />
      </ULandingCard>
    </ULandingSection>
  </UContainer>
</template>
