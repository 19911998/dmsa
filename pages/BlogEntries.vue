<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero" />

    <BlogList :entries="blog" />
  </UContainer>
</template>

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
