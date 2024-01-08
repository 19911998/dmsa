<template>
  <!-- UPageHero v-if="page.hero" v-bind="page.hero" /-->
  <div style="height: calc(100vh - 65px)">
    <ClientOnly>
      <LMap
        ref="mapRef"
        :min-zoom="5"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />

        <LMarker
          v-for="item of entries"
          :key="item._path"
          :lat-lng="[item.meta.lat, item.meta.lng]"
          :options="{
            autoPanOnFocus: true
          }"
        >
          <LTooltip>
            {{ item.meta.name }}, <span class="font-semibold">{{ item.meta.ort }}</span>
          </LTooltip>

          <LPopup>
            <div class="font-semibold">{{ item.title }}</div>
            <div class="flex gap-2">
              <div class="text-gray">
                {{ item.description }}
              </div>

              <UButton
                :to="item._path"
                size="sm"
                icon="i-heroicons-arrow-right-20-solid"
                trailing
              >
                Mehr
              </UButton>
            </div>
          </LPopup>
        </LMarker>
      </LMap>

      <template #fallback>
        <ULandingSection class="max-w-full w-[42rem] mx-auto !py-8" :ui="{ container: '!px-0 !gap-4' }">
          <ULandingCard
            v-for="(item, index) of entries"
            :key="index"
            :to="item?._path"
            :title="item.title + ', ' + item.meta.ort"
            :description="item.description"
          />
        </ULandingSection>
      </template>
    </ClientOnly>
  </div>
</template>
  
<script setup lang="ts">
import { LMap } from '@vue-leaflet/vue-leaflet'

let L: any
const mapRef = ref<typeof LMap | null>(null)

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').sort({ createdAt: -1 }).find())

const bounds = computed(() => [
  [ Math.min(...entries.value.map(m => m.meta.lat)), Math.min(...entries.value.map(m => m.meta.lng)) ],
  [ Math.max(...entries.value.map(m => m.meta.lat)), Math.max(...entries.value.map(m => m.meta.lng)) ] 
])

watch([() => mapRef.value?.leafletObject, () => bounds.value], async ([map]) => {
  L ||= await import('leaflet')
  if (map) {
    map.fitBounds(L.latLngBounds(bounds.value), {
      padding: [50, 50]
    })
  }
})

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
  