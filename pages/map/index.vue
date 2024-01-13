<template>
  <div class="flex relative">
    <div class="w-full h-[calc(100vh-65px)]">
      <ClientOnly>
        <LMap
          ref="mapRef"
          :min-zoom="5"
          :max-zoom="10"
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
              <div class="font-semibold">
                {{ item.title }}
              </div>

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

          <LControl position="topright">
            <UButton
              v-show="!showFilter"
              icon="i-heroicons-funnel"
              class="sm:hidden"
              @click="showFilter = true"
            >
              Ergebnisse filtern
            </UButton>
          </LControl>
        </LMap>

        <template #fallback>
          <UContainer class="mt-4">
            <ULandingGrid class="w-full">
              <ULandingCard
                v-for="(item, index) of filtered"
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

    <div
      class="absolute sm:relative top-[65] right-0 z-[1000] min-w-fit transition-transform"
      :class="showFilter ? '' : 'transform translate-x-full sm:translate-x-0'"
    >
      <FilterMap
        ref="filterMapRef"
        :page="page"
        :schema="schema"
        :entries="entries"
        :shadow="false"
        :rounded="false"
        class="h-[calc(100vh-65px)] sm:relative bg-background"
      >
        <div class="absolute top-0 right-0 mt-1 transform sm:hidden">
          <UButton variant="ghost" color="white" @click="showFilter = false">
            <UIcon name="i-heroicons-chevron-right" class="text-2xl" />
          </UButton>
        </div>
      </FilterMap>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import type { LMap, LMarker } from '@vue-leaflet/vue-leaflet'
import type FilterMap from 'components/FilterMap.vue'

const filterMapRef = ref<typeof FilterMap | null>(null)
const filtered = computed(() => filterMapRef.value?.filtered || [])
const bounds = computed(() => filterMapRef.value?.bounds || [])

const showFilter = ref(false)

let L: any

const mapRef = ref<typeof LMap | null>(null)
const markerRef = ref<typeof LMarker[]>([])

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: schema } = await useAsyncData('filters', () => queryContent('_schema').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').without('body').find())

/* function toggleTimeAxis () {
  timeAxis.value = !timeAxis.value
  if (timeAxis.value) {
    year.value = years.value[0]
    const interval = setInterval(() => {
      if (year.value < years.value[1]) {
        year.value++
      } else {
        clearInterval(interval)
      }
    }, 250)
  }
} */
watch([() => mapRef.value?.leafletObject, () => bounds.value, () => filtered.value], async ([map]) => {
  if (!map || !bounds.value.length) return

  L ||= await import('leaflet')

  map.fitBounds(bounds.value, {
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
