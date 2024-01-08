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

    <UCard class="min-w-fit">
      <div class="flex flex-col gap-4 items-start">
        <UBadge v-if="tag" size="md" class="pr-1">
          <div class="whitespace-nowrap flex items-center gap-x-1">
            {{ tag }}
            <UButton icon="i-heroicons-x-mark-20-solid" class="text-md" :padded="false" :to="route.path" />
          </div>
        </UBadge>

        <UButtonGroup>
          <USelect v-model="state" :options="states" placeholder="Bundesland" />
          <UButton v-if="state" color="gray" icon="i-heroicons-x-mark-20-solid" @click="state = ''" />
        </UButtonGroup>
      </div>
    </UCard>
  </div>
</template>
  
<script setup lang="ts">
import { LMap, LMarker } from '@vue-leaflet/vue-leaflet'

const route = useRoute()
const tag = computed(() => route.query.tag as string)

let L: any

const mapRef = ref<typeof LMap | null>(null)
const markerRef = ref<typeof LMarker[]>([])

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())

const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').sort({ createdAt: -1 }).find())

const filteredBeforeState = computed(() => entries.value.filter(({ meta, tags }) => {
  if (!(meta.lng && meta.lat)) return
  if (tag.value && !tags?.includes(tag.value)) return

  return true
}))

const filtered = computed(() => filteredBeforeState.value.filter(({ meta }) => {
  if (state.value && meta.bundesland !== state.value) return

  return true
}))

const states = computed(() => [...entries.value.reduce((acc, { meta }) => {
  if (meta.bundesland) acc.add(meta.bundesland)
  return acc
}, new Set() as Set<string>)].map(label => ({
  label,
  disabled: !filteredBeforeState.value.find(_ => _.meta.bundesland === label)
})))

const state = useState('state', () => null)

if (tag.value) {
  const stateSelected = states.value.find(_ => _.label.toLowerCase() === tag.value.toLowerCase())
  if (stateSelected) {
    state.value = stateSelected?.label
    useRouter().push(route.path)
  }
}

const bounds = computed(() => [
  [ Math.min(...filtered.value.map(m => m.meta.lat)), Math.min(...filtered.value.map(m => m.meta.lng)) ],
  [ Math.max(...filtered.value.map(m => m.meta.lat)), Math.max(...filtered.value.map(m => m.meta.lng)) ] 
])

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
