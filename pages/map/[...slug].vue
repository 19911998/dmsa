<template>
  <UPage>
    <template #left></template>

    <template #right>
      <UAside
        :links="page.tags?.map((tag: string) => ({
          label: tag,
          to: `/map?tag=${encodeURIComponent(tag)}`,
          icon: 'i-heroicons-tag'
        }))"
      >
        <dl class="flex flex-col gap-y-2 text-sm">
          <template
            v-for="prop of ['bundesland', 'ort', 'träger', 'zeitraum', 'Organisationen']"
            :key="prop"
          >
            <div
              v-if="page.meta[prop]"
            >
              <dt class="text-primary font-semibold capitalize">
                {{ prop }}
              </dt>
              <dd>
                <ul v-if="Array.isArray(page.meta[prop])">
                  <li v-for="(li, i) in page.meta[prop]" :key="i" class="mb-2">
                    {{ li }}
                  </li>
                </ul>

                <template v-else>
                  {{ page.meta[prop] }}
                </template>
              </dd>
            </div>
          </template>
        </dl>
      </UAside>
    </template>

    <UPageHeader :title="page.title" :description="page.description">
      <template #headline>
        <UBreadcrumb
          :links="[
            {
              label: 'Karte',
              icon: 'i-heroicons-map',
              to: '/map'
            }
          ]"
        />
      </template>
    </UPageHeader>

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" class="max-w-xl" />

      <hr v-if="surround?.length">

      <UDocsSurround :surround="surround" />
    </UPageBody>
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

if (page.value.meta.jahre) {
  page.value.meta.zeitraum = page.value.meta.jahre.reduce((acc: number[][], val: number) => {
    if (!acc.length || (val > acc.at(-1).at(-1) + 1)) {
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
  