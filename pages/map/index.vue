<template>
  <UContainer>
    <UPageHero v-if="page.hero" v-bind="page.hero" />
  
    <div class="h-[70vh] mb-8">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[47.21322, -1.559482]"
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
            title: item.meta['meta-daten']?.name
          }"
        >
          <l-popup>
            <div class="font-semibold">{{ item.title }}</div>
            <div class="text-gray">
              {{ item.description }}
              <NuxtLink :to="item._path" class="font-semibold">
                mehr&hellip;
              </NuxtLink>
            </div>
          </l-popup>
        </LMarker>
      </LMap>
    </div>

    <!--ULandingSection class="max-w-full w-[42rem] mx-auto !py-0" :ui="{ container: '!px-0' }">
      <ULandingCard
        v-for="(item, index) of entries"
        :key="index"
        :to="item?._path"
      >
        <template #container>
          <div class="flex flex-col md:flex-row items-start gap-4">
            <div class="w-full">
              <div class="text-2xl mb-1 text-gray-900 dark:text-white font-bold">
                <MDC :value="item.title" />
              </div>

              {{ item.meta['meta-daten']?.name }}

              <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                <MDC :value="item.description" />
              </div>
            </div>
          </div>
        </template>
      </ULandingCard>
    </ULandingSection-->
  </UContainer>
</template>
  
<script setup lang="ts">
const zoom = 3

const { data: page } = await useAsyncData('map-overview', () => queryContent('_map').findOne())
const { data: entries } = await useAsyncData('map-entries', () => queryContent('map').sort({ createdAt: -1 }).find())

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
  