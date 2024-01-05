<template>
  <div>
    <UPageHero v-bind="page">
      <template #description>
        {{ page.categories }}

        <MDC :value="page.description" />
      </template>

      <NuxtImg v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="ml-auto" preset="page" />
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

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('map')
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
  