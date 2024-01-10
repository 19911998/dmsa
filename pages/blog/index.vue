<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="page.links" />
      </template>

      <template #right>
        <UAside>
          <UPageLinks
            v-if="tags.length"
            :links="[...tags].filter(([_tag]) => _tag !== tag).map(([tag, count]) => ({
              label: `${tag} (${count})`,
              to: `/blog?tag=${encodeURIComponent(tag)}`,
              icon: 'i-heroicons-tag'
            }))"
            title="Schlagworte"
          />
        </UAside>
      </template>

      <UPageHeader
        v-bind="page.hero"
        :links="tag ? [{
          label: 'Alle Blog-Einträge',
          to: '/blog',
          target: '_self',
          icon: 'i-heroicons-arrow-uturn-left'
        }] : undefined"
      >
        <template v-if="tag" #headline>
          #{{ tag }}
        </template>
      </UPageHeader>

      <UPageBody>
        <BlogList :entries="entries" :page-tag="tag" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const tag = computed(() => useRoute().query.tag as string)

const { data: entries } = await useAsyncData(tag.value ? 'tag-' + tag.value : 'blog-entries',
  () => (tag.value
      ? queryContent('blog').where({ tags: { $contains: tag.value } })
      : queryContent('blog')
    ).without('body').sort({ createdAt: -1 }).find(),
  { watch: [tag] })

if (!entries.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const tags = computed(() =>
  Array.from(
    (entries.value as any[])
    .reduce((acc: Map<string, number>, item) => {
      for (const tag of item.tags) {
        acc.set(tag, (acc.get(tag) || 0) + 1)
      }
      return acc
    }, new Map())
  ).sort((a, b) => b[1] - a[1])
)

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
