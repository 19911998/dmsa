<template>
  <!-- UPageHero v-if="page.hero" v-bind="page.hero" /-->
  <div style="height: calc(100vh - 65px)" class="flex">
    <div class="w-full">
      <ClientOnly>
        <LMap
          ref="mapRef"
          :min-zoom="5"
          :max-zoom="8"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
          />

          <LMarker
            v-for="item of filtered"
            ref="markerRef"
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
          <UContainer class="mt-4">
            <ULandingGrid class="w-full">
              <ULandingCard
                v-for="(item, index) of entries"
                :key="index"
                :to="item?._path"
                :title="item.title + ', ' + item.meta.ort"
                :description="item.description"
                class="col-span-3"
              />
            </ULandingGrid>
          </UContainer>
        </template>
      </ClientOnly>
    </div>

    <UCard>
      <UButtonGroup v-if="states.length > 1">
        <USelect v-model="state" :options="states" placeholder="Bundesland" />
        <UButton v-if="state" color="gray" icon="i-heroicons-x-mark-20-solid" @click="state = ''" />
      </UButtonGroup>
    </UCard>
  </div>
</template>
  
<script setup lang="ts">
import { LMap, LMarker } from '@vue-leaflet/vue-leaflet'

const { tag } = useRoute().query

let L: any

const mapRef = ref<typeof LMap | null>(null)
const markerRef = ref<typeof LMarker[]>([])

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())

const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').sort({ createdAt: -1 }).find())

const bounds = computed(() => [
  [ Math.min(...filtered.value.map(m => m.meta.lat)), Math.min(...filtered.value.map(m => m.meta.lng)) ],
  [ Math.max(...filtered.value.map(m => m.meta.lat)), Math.max(...filtered.value.map(m => m.meta.lng)) ] 
])

const state = ref('')
const states = computed(() => [...filtered.value.reduce((acc, { meta }) => {
  if (meta.bundesland) acc.add(meta.bundesland)
  return acc
}, new Set() as Set<string>)])

const filtered = computed(() => entries.value.filter(({ meta, tags }) => {
  if (!(meta.lng && meta.lat)) return
  if (tag && !tags?.includes(tag)) return
  if (state.value && meta.bundesland === state.value) return

  return true
}))

watch([() => mapRef.value?.leafletObject, () => bounds.value, () => filtered.value], async ([map]) => {
  if (!map) return

  L ||= await import('leaflet')

  map.fitBounds(L.latLngBounds(bounds.value), {
    padding: [50, 50]
  })
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
