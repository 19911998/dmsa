<template>
  <div class="flex relative">
    <div class="w-full min-h-[calc(100vh-210px)] lg:h-[calc(100vh-140px)]">
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
            <UChip
              v-show="!showFilter"
              inset
              :color="filterMapRef?.filterActive ? 'orange' : 'transparent'"
              class="sm:hidden"
              size="lg"
              :ui="{ base: '!ring-0' }"
            >
              <UButton
                icon="i-heroicons-funnel"
                @click="showFilter = true"
              >
                Filter
              </UButton>
            </UChip>
          </LControl>

          <LControl position="bottomleft">
            <UButton
              variant="ghost"
              class="bg-white text-black dark:text-black shadow-md"
              icon="i-heroicons-arrows-pointing-out"
              size="xl"
              @click="center"
            />
          </LControl>
        </LMap>

        <template #fallback>
          <UContainer class="mt-4">
            <UBlogList orientation="horizontal">
              <UBlogPost
                v-for="(post, index) of filtered || entries"
                :key="index"
                :to="post._path"
                :title="post.title"
                :description="post.description"
                :image="post.image"
                :date="formatDate(post.date)"
                :badge="post.badge"
                orientation="vertical"
              />
            </UBlogList>
          </UContainer>
        </template>
      </ClientOnly>
    </div>

    <div
      class="absolute sm:relative top-[65] right-0 z-[1000] h-full min-w-fit transition-transform"
      :class="showFilter ? '' : 'transform translate-x-full sm:translate-x-0'"
    >
      <FilterMap
        ref="filterMapRef"
        :page="page"
        :schema="schema"
        :entries="entries"
        :shadow="false"
        :rounded="false"
        class="sm:relative bg-background"
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

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: schema } = await useAsyncData('filters', () => queryContent('_schema').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').without('body').find())

const filterMapRef = ref<typeof FilterMap | null>(null)
const filtered = computed(() => filterMapRef.value?.filtered)
const bounds = computed(() => filterMapRef.value?.bounds)

const showFilter = ref(false)

let L: any

const mapRef = ref<typeof LMap | null>(null)
const markerRef = ref<typeof LMarker[]>([])

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

async function center () {
  const map = mapRef.value?.leafletObject 
  if (!map || !bounds.value) return

  L ||= await import('leaflet')

  map.fitBounds(bounds.value, {
    padding: [50, 50]
  })  
}

watch([() => mapRef.value?.leafletObject, () => bounds.value, () => filtered.value], center)

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
