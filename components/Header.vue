<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        DMSA
      </template>
    </template>

    <template #center>
      <UHeaderLinks v-if="route.path === '/'" :links="headerLinks" />
      <UDocsSearchButton v-else-if="header?.search" label="Suche&hellip;" class="hidden lg:flex" />
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

const headerLinks = useState('header-links', () => [])

const { header } = useAppConfig()
</script>
<<<<<<< HEAD

=======
>>>>>>> hotfix
