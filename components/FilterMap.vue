<template>
  <div class="overflow-y-scroll z-[100] relative h-full px-5 py-4 max-h-[calc(100vh-210px)] lg:max-h-[calc(100vh-140px)]">
    <slot />
    <div class="text-primary text-sm/6 font-semibold mb-2 flex items-center gap-x-2">
      Filter
      <UTooltip v-if="filterActive" text="Zur&uuml;cksetzen">
        <UBadge class="cursor-pointer" variant="outline" @click="reset">
          <UIcon name="i-heroicons-minus" class="text-md" />
        </UBadge>
      </UTooltip>
    </div>

    <div class="flex flex-col gap-4 items-stretch">
      <UBadge v-if="tag" size="md" class="pr-1 self-start">
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
        <div v-for="(filter, key) in filters" :key="key">
          <div class="italic text-sm tracking-wide opacity-60">
            {{ key }}
          </div>

          <div class="flex flex-col gap-1 mt-1">
            <UCheckbox
              v-for="key2 in Object.keys(filter)"
              :key="key2"
              :model-value="filter[key2] || (filtered.length && filterSetNotAffected[key2]) || false"
              :label="key2"
              :disabled="disabled[key2] || filterSetNotAffected[key2]"
              :ui="(disabled[key2] || filterSetNotAffected[key2])
                ? { label: 'text-gray-500 dark:text-gray-400 cursor-not-allowed' }
                : undefined"
              @update:model-value="filter[key2] = $event"
            />
          </div>
        </div>

        <div class="space-y-1">
          <div class="italic text-sm tracking-wide opacity-60">
            {{ (timeAxis || years.length === 1) ? 'Jahr' : 'Zeitraum' }}
          </div>

          <div class="flex items-center gap-x-2">
            <UCheckbox
              :model-value="timeAxis || years.length === 1"
              :disabled="years.length === 1"
              :ui="{ wrapper: 'items-center', inner: 'grow' }"
              @update:model-value="timeAxis = $event"
            >
              <template #label>
                <div
                  class="flex items-stretch gap-2"
                >
                  <span class="whitespace-nowrap" :class="{ 'font-mono': timeAxis }">
                    {{ timeAxis ? year : years.join('\u202f–\u202f') }}
                  </span>
                </div>
              </template>
            </UCheckbox>

            <div class="relative grow">
              <URange
                v-if="years.length > 1"
                :model-value="timeAxis ? year : years[1]"
                size="xs"
                :min="years[0]"
                :max="years[1]"
                :ui="timeAxis ? { progress: { background: 'bg-gray-200 dark:bg-gray-700' } } : undefined"
                @update:model-value="year = $event, timeAxis = true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  page: {
    links?: any[]
  },
  schema: ParsedContent,
  entries: Omit<ParsedContent, 'body'>[]
}>()

const tag = computed(() => route.query.tag as string)
const year = ref(0)
const timeAxis = useState('timeAxis', () => false)
const route = useRoute()

const bounds = computed(() => beforeTimeAxis.value.length && [
  [ Math.min(...beforeTimeAxis.value.map(m => m.meta.lat)), Math.min(...beforeTimeAxis.value.map(m => m.meta.lng)) ],
  [ Math.max(...beforeTimeAxis.value.map(m => m.meta.lat)), Math.max(...beforeTimeAxis.value.map(m => m.meta.lng)) ]
])

const filtered = computed(() => timeAxis.value
  ? beforeTimeAxis.value.filter(({ meta }) => meta.jahre?.length && year.value >= Math.min(...meta.jahre) && year.value <= Math.max(...meta.jahre))
  : beforeTimeAxis.value)

const filterActive = computed(() => filtered.value.length < hasGeo.value.length)

const filterSetNotAffected = computed(() => {
  const ret = {}
  for (const key in filters.value) {
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
  }
  return ret
})

const filters = useState<Record<string, any>>('filters', () => extractFilters(props.schema.meta.filter))

const disabled = computed(() => {
  const ret = {}
  for (const key in filters.value) {
    for (const key2 in filters.value[key]) {
      ret[key2] = filtered.value.every(({ meta }) => !meta.filter[key]?.[key2])
    }
  }
  return ret
})

const hasGeo = computed(() => props.entries.filter(({ meta }) => meta?.lng && meta.lat))

const filteredByTag = computed(() => hasGeo.value.filter(({ tags }) => !tag.value || tags?.includes(tag.value)))

const beforeFilterSet = computed(() => state.value
  ? filteredByTag.value.filter(({ meta }) => meta.bundesland === state.value)
  : filteredByTag.value)

const beforeTimeAxis = computed(() => beforeFilterSet.value.filter(({ meta }) => inFilterSet(meta, filters.value)))

const notFilteredByState = computed(() => filteredByTag.value.filter(({ meta }) => inFilterSet(meta, filters.value)))

const states = computed(() => [
  { label: 'Alle Bundesländer', value: '' },
  ...Array.from(
      // extract unique list of states from all entries via Set syntax
      (props.entries as any[]).reduce((acc, { meta }) => {
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

const years = computed(() => [
  ...new Set([
    Math.min(...beforeTimeAxis.value.map(({ meta }) => meta.jahre && Math.min(...meta.jahre)).filter(Boolean)),
    Math.max(...beforeTimeAxis.value.map(({ meta }) => meta.jahre && Math.max(...meta.jahre)).filter(Boolean))
  ])
])

function reset () {
  for (const key in filters.value) {
    for (const key2 in filters.value[key]) {
      filters.value[key][key2] = false
    }
  }
  state.value = ''
  timeAxis.value = false
  if (tag.value) navigateTo({ path: route.path })
}

function extractFilters (scheme: Record<string, any>) {
  return Object.keys(scheme).reduce((acc, key) => {
    if (Object.values(scheme[key])[0] === null) {
      acc[key] = false
    } else {
      acc[key] = extractFilters(scheme[key])
    }
    return acc
  }, {})
}

function inFilterSet (meta: Record<string, any>, activeFilters: Record<string, any>) {
  for (const key in activeFilters) {
    for (const key2 in activeFilters[key]) {
      if (activeFilters[key][key2] && !meta.filter[key]?.[key2]) return false
    }
  }
  return true
}

watch(() => years.value, () => {
  year.value = year.value
    ? Math.min(years.value[1], Math.max(year.value, years.value[0]))
    : years.value[1]
}, { immediate: true })

defineExpose({
  bounds,
  filtered,
  filterActive
})
</script>
