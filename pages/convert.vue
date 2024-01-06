<template>
  <UContainer class="mt-4">
    <UTextarea
      v-model="input"
      placeholder="CSV"
      :rows="5"
    />

    <ClientOnly>
      <USelect
        v-if="records?.size"
        v-model="id"
        :options="[ ...records.keys() ]"
        placeholder="ID"
        class="mt-8"
      />

      <UTextarea v-if="id" :model-value="translate(id)" autoresize class="mt-8" />
    </ClientOnly>
  </UContainer>
</template>

<script setup lang="ts">
import Papa from 'papaparse'

if (useRuntimeConfig().public.site_env !== 'preview') {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const input = ref('')
const id = ref('')

const { data: meta } = await useFetch('/api/meta.yml')

const parsed = computed(() => input.value ? Papa.parse(input.value)?.data : undefined)

const records = computed(() => {
  if (!parsed.value) return

  const categories = parsed.value[0].map((key: string) => key.trim())

  return parsed.value.slice(1).reduce((acc: Map<string, Record<string, string>>, curr: string[]) => {
    const record = categories.reduce((acc: Record<string, string>, key: string, idx: number) => {
      if (key) {
        acc[key] = curr[idx].trim()
      }
      return acc
    }, {})

    const { ID } = record
    delete record.ID
    acc.set(ID, record)

    return acc
  }, new Map())
})

function translate (id) {
  return meta.value.replace(/^( *)([^{]+){([^:}]+):?([^}]+)?}.*\n/gm, (_match: string, spaces: string, category: string, key: string, modifier?: string) => {
    let value = records.value.get(id)[key]
    if (!value) return ''

    if (modifier) {
      switch (modifier) {
        case 'Boolean':
          value = 'true'
          break
        case 'Array':
          value = ['', ...value.split(/, ?/)].join('\n' + spaces + '  - ')
          break
      }
    }
    return spaces + category + value + '\n'
  })
}
</script>
