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
            :links="[...tags].map(([tag, count]) => ({
              label: `${tag} (${count})`,
              to: `/blog/?tag=${encodeURIComponent(tag)}`,
              icon: 'i-heroicons-tag',
              exactQuery: true
            }))"
            title="Schlagworte"
          />
        </UAside>
      </template>

      <UPageHeader
        v-bind="page.hero"
        :links="tag ? [{
          label: 'Alle Blog-Einträge',
          to: '/blog/',
          target: '_self',
          icon: 'i-heroicons-arrow-uturn-left'
        }] : undefined"
      >
        <template v-if="tag" #headline>
          #{{ tag }}
        </template>
      </UPageHeader>

      <UPageBody>
        <UBlogList orientation="vertical">
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            :to="post._path"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="formatDate(post.date)"
            :badge="post.badge"
            orientation="horizontal"
            class="col-span-full"
            :ui="{
              description: 'line-clamp-2'
            }"
          >
            <template #badge>
              <TagList base="/blog/" :tags="post.tags" :page-tag="tag" class="mt-4" />
            </template>
          </UBlogPost>
        </UBlogList>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const tag = computed(() => useRoute().query.tag as string)

const { data: posts } = await useAsyncData(tag.value ? 'tag-' + tag.value : 'blog-posts',
  () => (tag.value
      ? queryContent('blog').where({ tags: { $contains: tag.value } })
      : queryContent('blog')
    ).without('body').sort({ date: -1 }).find(),
  { watch: [tag] })

if (!posts.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const tags = computed(() =>
  Array.from(
    (posts.value as any[])
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
