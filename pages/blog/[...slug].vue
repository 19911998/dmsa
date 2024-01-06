<template>
  <div>
    <UPageHero
      v-bind="page"
    >
      <template #description>
        <div class="flex flex-col">
          <MDC :value="page.description" />

          <div class="flex items-center mt-5 gap-5">
            <div class="text-slate-500 font-light text-sm tracking-wide flex items-center gap-x-2">
              <UIcon name="i-heroicons-calendar" class="text-lg" />
              {{ getCreationDate(page) }}
            </div>

            <TagList base="/blog" tag-base="/blog/tags" :tags="page.tags" />
          </div>
        </div>
      </template>

      <NuxtImg
        v-if="page.image"
        :src="page.image.src"
        :alt="page.image.alt"
        class="ml-auto"
        preset="page"
      />
    </UPageHero>

    <UPageBody prose>
      <UContainer>
        <ContentRenderer v-if="page.body" :value="page" class="max-w-xl mx-auto" />
      </UContainer>

      <hr v-if="surround?.length">

      <UDocsSurround :surround="surround" />
    </UPageBody>
  </div>
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
