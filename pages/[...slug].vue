<template>
  <UPage>
    <UPageHeader v-bind="page">
      <NuxtImg
        v-if="page.image"
        :src="page.image.src"
        :alt="page.image.alt"
        class="ml-auto"
        preset="page"
      />
    </UPageHeader>

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" class="max-w-xl" />
    </UPageBody>
  </UPage>
</template>
  
<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

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
