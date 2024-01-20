<template>
  <div>
    <Header />

    <UMain class="min-h-[calc(100vh-var(--header-height)+20)]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch
        :files="files"
        :navigation="navigation"
        hide-color-mode
        :ui="{ wrapper: 'z-[1000]' }"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()
const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...useRuntimeConfig().public.site_env === 'preview' ? [{ name: 'robots', content: 'noindex' }] : []
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: useRuntimeConfig().public.canonical_url + route.path }
  ],
  htmlAttrs: {
    lang: 'de'
  }
})

useSeoMeta({
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>
