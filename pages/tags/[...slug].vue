<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero">
      <template #description>
        Es werden alle Blog-Beiträge mit dem Tag <span class="text-primary">#{{ slug }}</span> angezeigt
      </template>
    </UPageHero>

    <BlogList :entries="blog" :page-tag="slug" />
  </UContainer>
</template>

<script setup lang="ts">
const [slug] = useRoute().params.slug

const { data: blog } = await useAsyncData('tag-' + slug, () => queryContent('blog').where({ tags: { $contains: slug } }).sort({ createdAt: -1 }).find())

if (!blog.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: page } = await useAsyncData('blog-list', () => queryContent('blog-list').findOne())

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
