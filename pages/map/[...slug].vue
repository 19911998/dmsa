<template>
  <div>
    <UBreadcrumb
      :links="[
        {
          label: 'Karte',
          icon: 'i-heroicons-map',
          to: '/map'
        }
      ]"
      class="mt-4"
    />

    <UPageHero v-bind="page">
      <template #description>
        <MDC :value="page.description" />

        <TagList base="/map" :tags="page.tags" class="mt-5" />
      </template>

      <dl>
        <template
          v-for="prop of ['ort', 'träger', 'zeitraum']"
          :key="prop"
        >
          <div
            v-if="page.meta[prop]"
            class="grid grid-cols-3 gap-x-2" 
          >
            <dt class="text-right font-semibold capitalize">
              {{ prop }}:
            </dt>
            <dd
              class="col-span-2"
              v-html="Array.isArray(page.meta[prop])
                ? page.meta[prop].join(', ')
                : page.meta[prop]"
            />
          </div>
        </template>
      </dl>
    </UPageHero>

    <UPageBody prose>
      <UContainer>
        <ContentRenderer v-if="page.body" :value="page" class="max-w-lg mx-auto" />
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

if (page.value.meta.jahre) {
  page.value.meta.zeitraum = page.value.meta.jahre.reduce((acc: number[][], val: number) => {
    if (!acc.length || (val > acc.at(-1)[0] + 1)) {
      acc.push([val])
    } else {
      acc.at(-1)[1] = val
    }
    return acc
  }, []).map((val: number[]) => {
    return (val.length > 1) ? val.join('\u202f–\u202f') : val[0]
  })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('map')
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Karte',
  icon: 'i-heroicons-map',
  to: '/map'
}]

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
  