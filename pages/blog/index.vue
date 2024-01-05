<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero" />

    <BlogList :entries="entries" />
  </UContainer>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('blog-overview', () => queryContent('_blog').findOne())
const { data: entries } = await useAsyncData('blog-entries', () => queryContent('blog').sort({ createdAt: -1 }).find())

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
