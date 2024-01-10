<template>
  <UPage>
    <template #left>
      <UAside :links="blog.links" />
    </template>

    <template #right>
      <UAside>
        <div class="text-slate-500 font-light text-sm tracking-wide flex items-center gap-x-2 mb-8">
          <UIcon name="i-heroicons-calendar" class="text-lg" />
          {{ getCreationDate(page) }}
        </div>

        <UPageLinks
          :links="page.tags?.map((tag: string) => ({
            label: tag,
            to: `/blog?tag=${encodeURIComponent(tag)}`,
            icon: 'i-heroicons-tag'
          }))"
          title="Schlagworte"
        />
      </UAside>
    </template>

    <UPageHeader :title="page.title" :description="page.description">
      <template #headline>
        <UBreadcrumb
          :links="[
            {
              label: 'Blog',
              icon: 'i-heroicons-square-3-stack-3d',
              to: '/blog'
            }
          ]"
        />
      </template>
    </UPageHeader>

    <UPageBody prose>
      <NuxtImg
        v-if="page.image"
        :src="page.image.src"
        :alt="page.image.alt"
        preset="page"
      />

      <ContentRenderer v-if="page.body" :value="page" class="max-w-xl" />

      <hr v-if="surround?.length">

      <UDocsSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.body?.toc?.links?.length">
      <UDocsToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>

<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: blog } = await useAsyncData('blog-links', () => queryContent('_blog').only('links').findOne())

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('blog')
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>
