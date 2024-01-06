<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero">
      <template v-if="tag" #description>
        Es werden alle Blog-Beiträge mit dem Tag <span class="text-primary">#{{ tag }}</span> angezeigt
      </template>
    </UPageHero>

    <BlogList :entries="entries" :page-tag="tag" />
  </UContainer>
</template>

<script setup lang="ts">
const tag = computed(() => useRoute().query.tag as string)

const { data: entries } = tag.value
  ? await useAsyncData('tag-' + tag.value, () => queryContent('blog').where({ tags: { $contains: tag.value } }).sort({ createdAt: -1 }).find())
  : await useAsyncData('blog-entries', () => queryContent('blog').sort({ createdAt: -1 }).find())

if (!entries.value.length) {
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
