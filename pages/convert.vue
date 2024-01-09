<template>
  <UContainer class="mt-4">
    <USelect
      v-if="records?.size"
      v-model="id"
      :options="[...records.keys()].sort((a: string, b: string) => a.localeCompare(b))"
      placeholder="ID"
      class="mt-8"
    />

    <UTextarea v-if="id" :model-value="translate(id)" autoresize class="mt-8" />
  </UContainer>
</template>

<script setup lang="ts">
import Papa from 'papaparse'

if (useRuntimeConfig().public.site_env !== 'preview') {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const id = ref('')

const { data: meta } = await useFetch('/api/schema.yml')
const { data: csv } = await useFetch('/api/meta.csv')

const parsed = computed(() => csv.value ? Papa.parse(csv.value)?.data : undefined)

const records = computed(() => {
  if (!parsed.value) return

  const categories = parsed.value[0].map((key: string) => key.trim())

  return parsed.value.slice(1).reduce((acc: Map<string, Record<string, string>>, curr: string[]) => {
    const record = categories.reduce((acc: Record<string, string>, key: string, idx: number) => {
      if (key) {
        acc[key] = curr[idx]?.trim()
      }
      return acc
    }, {})

    const { ID } = record

    if (ID) {
      delete record.ID
      acc.set(ID, record)
    }

    return acc
  }, new Map())
})

function translate (id: string) {
  return meta.value.replace(/^( *)([^\n{]+){([^:}]+):?([^}]+)?}.*\n/gm, (_match: string, spaces: string, category: string, keys: string, modifier?: string) => {
    const [key, key2] = keys.split('|')

    let value = records.value.get(id)[key] || (key2 && records.value.get(id)[key2])

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
  .replace(/^ {2}.+?:\n(?= {2}\S)/gm, '')
  .replace(/^ {4}.+?:\n(?= {4}\S)/gm, '')
}
</script>
