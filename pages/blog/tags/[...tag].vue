<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero">
      <template #description>
        Es werden alle Blog-Beiträge mit dem Tag <span class="text-primary">#{{ tag }}</span> angezeigt
      </template>
    </UPageHero>

    <BlogList :entries="blog" :page-tag="tag" />
  </UContainer>
</template>

<script setup lang="ts">
const [tag] = useRoute().params.tag

const { data: blog } = await useAsyncData('tag-' + tag, () => queryContent('blog').where({ tags: { $contains: tag } }).sort({ createdAt: -1 }).find())

if (!blog.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: page } = await useAsyncData('blog-overview', () => queryContent('_blog').findOne())

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
