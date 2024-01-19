<template>
  <UHeader :links="headerLinks">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        DMSA
      </template>
    </template>

    <template v-if="header?.search && route.name !== 'index'" #center>
      <UDocsSearchButton label="Suche&hellip;" class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton v-if="header?.search" :label="null" :class="{ 'lg:hidden': route.name !== 'index' }" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])
const route = useRoute()

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const headerLinks = useState('header-links', () => route.path === '/'
  ? Object.keys(page.value.cards).map(key => ({
      label: page.value.cards[key].headline,
      to: '#' + key,
      exactHash: true
    }))
  : [])

const { header } = useAppConfig()
</script>
