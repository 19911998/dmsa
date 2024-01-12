<template>
  <div style="height: calc(100vh - 65px)" class="flex">
    <div class="w-full">
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

    <UCard class="min-w-fit overflow-y-scroll z-[100] relative" :ui="{ body: { padding: '!pt-4' }}">
      <div class="text-primary text-sm/6 font-semibold mb-2">
        Filter
      </div>

      <div class="flex flex-col gap-4 items-stretch">
        <UBadge v-if="tag" size="md" class="pr-1">
          <div class="whitespace-nowrap flex items-center gap-x-1">
            {{ tag }}
            <UButton icon="i-heroicons-x-mark-20-solid" class="text-md" :padded="false" :to="route.path" />
          </div>
        </UBadge>

        <UButtonGroup>
          <USelect v-model="state" :options="states" />
          <UButton v-if="state" color="gray" icon="i-heroicons-x-mark-20-solid" @click="state = ''" />
        </UButtonGroup>

        <div class="flex flex-col gap-2 items-stretch">
          <template v-for="(filter, key) in filters" :key="key">
            <div v-if="typeof filter === 'object'">
              <div class="italic text-sm tracking-wide">{{ key }}</div>
              <div class="flex flex-col gap-1 mt-1">
                <UCheckbox
                  v-for="key2 in Object.keys(filter)"
                  :key="key2"
                  :model-value="filter[key2] || filterSetNotAffected[key2]"
                  :label="key2"
                  :disabled="disabled[key2] || filterSetNotAffected[key2]"
                  :ui="(disabled[key2] || filterSetNotAffected[key2])
                    ? { label: 'text-gray-500 dark:text-gray-400 cursor-not-allowed' }
                    : undefined"
                  @update:model-value="filter[key2] = $event"
                />
              </div>
            </div>
            <template v-else>
              <UDivider />
              <UCheckbox
                v-model="filters[key]"
                :disabled="disabled[key] || filterSetNotAffected[key]"
                :color="disabled[key] ? 'orange' : undefined"
                :label="key"
                :ui="(disabled[key] || filterSetNotAffected[key])
                  ? { label: 'text-gray-500 dark:text-gray-400 cursor-not-allowed' }
                  : undefined"
              />
            </template>
          </template>

          <div class="space-y-1">
            <div class="italic text-sm tracking-wide">
              {{ timeAxis ? 'Jahr' : 'Zeitraum' }}
            </div>

            <UCheckbox v-model="timeAxis" :ui="{ wrapper: 'items-center', inner: 'grow' }">
              <template #label>
                <div class="relative flex items-center gap-2">
                  <span class="whitespace-nowrap">{{ timeAxis ? year : years.join('\u202f–\u202f') }}</span>

                  <URange
                    :model-value="timeAxis ? year : years[1]"
                    size="xs"
                    :min="years[0]"
                    :max="years[1]"
                    :ui="timeAxis ? { progress: { background: 'bg-gray-200 dark:bg-gray-700' } } : undefined"
                    :disabled="!timeAxis"
                    @update:model-value="year = $event"
                  />
                </div>
              </template>
            </UCheckbox>
          </div>
        </div>
      </div>

      <UPageLinks
        v-if="page.links"
        :links="page.links"
        class="mt-8 text-primary"
        title="Links"
      />
    </UCard>
  </div>
</template>
  
<script setup lang="ts">
import { LMap, LMarker } from '@vue-leaflet/vue-leaflet'

const route = useRoute()
const tag = computed(() => route.query.tag as string)

const year = ref(0)
const timeAxis = useState('timeAxis', () => false)

let L: any

const mapRef = ref<typeof LMap | null>(null)
const markerRef = ref<typeof LMarker[]>([])

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: schema } = await useAsyncData('filters', () => queryContent('_schema').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').without('body').find())

const filters = useState<Record<string, any>>('filters', () => extractFilters(schema.value.meta.filter))

const disabled = computed(() => {
  const ret = {}
  for (const key in filters.value) {
    if (typeof filters.value[key] === 'object') {
      for (const key2 in filters.value[key]) {
        ret[key2] = filtered.value.every(({ meta }) => !meta.filter[key]?.[key2])
      }
    } else {
      ret[key] = filtered.value.every(({ meta }) => !meta.filter[key])
    }
  }
  return ret
})

const filterSetNotAffected = computed(() => {
  const ret = {}
  for (const key in filters.value) {
    if (typeof filters.value[key] === 'object') {
      for (const key2 in filters.value[key]) {
        ret[key2] = filters.value[key][key2]
          // deactivating filter doesn't change anything
          ? beforeFilterSet.value.filter(({ meta }) =>
              inFilterSet(meta, {
                ...filters.value,
                [key]: {
                  ...filters.value[key],
                  [key2]: false
                }
              })
            ).length === filtered.value.length
          // activating filter doesn't change anything
          : filtered.value.every(({ meta }) => meta.filter[key]?.[key2])
      }
    } else {
      ret[key] = filters.value[key]
        // deactivating filter doesn't change anything
        ? beforeFilterSet.value.filter(({ meta }) =>
            inFilterSet(meta, { ...filters.value, [key]: false })
          ).length === filtered.value.length
        // activating filter doesn't change anything
        : filtered.value.every(({ meta }) => meta.filter[key])
    }
  }
  return ret
})

const filteredBasic = computed(() => entries.value.filter(({ meta, tags }) => {
  if (!(meta?.lng && meta.lat)) return
  if (tag.value && !tags?.includes(tag.value)) return
  return true
}))

const beforeFilterSet = computed(() => state.value
  ? filteredBasic.value.filter(({ meta }) => meta.bundesland === state.value)
  : filteredBasic.value)

const beforeTimeAxis = computed(() => beforeFilterSet.value.filter(({ meta }) => inFilterSet(meta, filters.value)))

const filtered = computed(() => timeAxis.value
  ? beforeTimeAxis.value.filter(({ meta }) => meta.jahre?.includes(year.value))
  : beforeTimeAxis.value)

const notFilteredByState = computed(() => filteredBasic.value.filter(({ meta }) => inFilterSet(meta, filters.value)))

const states = computed(() => [
  { label: 'Alle Bundesländer', value: '' },
  ...Array.from(
      // extract unique list of states from all entries via Set syntax
      (entries.value as any[]).reduce((acc, { meta }) => {
        if (meta?.bundesland) acc.add(meta.bundesland)
        return acc
      }, new Set() as Set<string>)
    )
    // transform to array and disable states that are not available due to active filters
    .map((value: string) => ({
      label: value,
      value,
      disabled: !notFilteredByState.value.some(_ => _.meta.bundesland === value)
    }))
])

const state = useState('state', () => '')

const bounds = computed(() => beforeTimeAxis.value.length && [
  [ Math.min(...beforeTimeAxis.value.map(m => m.meta.lat)), Math.min(...beforeTimeAxis.value.map(m => m.meta.lng)) ],
  [ Math.max(...beforeTimeAxis.value.map(m => m.meta.lat)), Math.max(...beforeTimeAxis.value.map(m => m.meta.lng)) ]
])

const years = computed(() =>[
  Math.min(...beforeTimeAxis.value.map(({ meta }) => Math.min(meta.jahre)).filter(Boolean)),
  Math.max(...beforeTimeAxis.value.map(({ meta }) => Math.max(meta.jahre)).filter(Boolean))
])

watch(() => years.value, () => {
  year.value = year.value
    ? Math.min(years.value[1], Math.max(year.value, years.value[0]))
    : years.value[1]
}, { immediate: true })

function extractFilters (scheme: Record<string, any>) {
  return Object.keys(scheme).reduce((acc, key) => {
    if (Object.keys(scheme[key]).length === 1) {
      acc[key] = false
    } else {
      acc[key] = extractFilters(scheme[key])
    }
    return acc
  }, {})
}

function inFilterSet (meta: Record<string, any>, activeFilters: Record<string, any>) {
  for (const key in activeFilters) {
    if (typeof activeFilters[key] === 'object') {
      for (const key2 in activeFilters[key]) {
        if (activeFilters[key][key2] && !meta.filter[key]?.[key2]) return false
      }
    } else if (activeFilters[key] && !meta.filter[key]) return false
  }
  return true
}

watch([() => mapRef.value?.leafletObject, () => bounds.value, () => filtered.value], async ([map]) => {
  if (!map || !bounds.value) return

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
