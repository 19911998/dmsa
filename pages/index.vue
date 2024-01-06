<template>
  <div>
    <ULandingHero
      v-if="page.hero"
      v-bind="page.hero"
      :ui="{
        title: 'text-4xl'
      }"
    >
      <template #title>
        <MDC :value="page.hero.title" />
      </template>
    </ULandingHero>

    <ULandingSection id="intro" v-bind="page.intro" />

    <ULandingSection id="map">
      <ULandingCTA
        v-bind="page.map"
      />
    </ULandingSection>

    <ULandingSection id="blog" :ui="{ container: 'gap-8 sm:gap-8', links: '!mt-4' }" v-bind="page.blog">
      <UPageGrid class="xl:grid-cols-4">
        <ULandingCard
          v-for="(item, index) of blog"
          :key="index"
          v-bind="item"
          :to="item._path"
        >
          <NuxtImg
            v-if="item.image"
            :src="item.image.src"
            style="order: -2; max-width: 250px;"
            :alt="item.image.alt"
            preset="blog"
          />
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const { data: blog } = await useAsyncData('blog-entries', () => queryContent('blog').sort({ createdAt: -1 }).limit(4).find())

const headerLinks = useState('header-links', () => undefined)

headerLinks.value = [{
  label: 'Intro',
  to: '#intro',
  exactHash: true
}, {
  label: 'Karte',
  to: '#map',
  exactHash: true
}, {
  label: 'Blog',
  to: '#blog',
  exactHash: true
}]

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  ogSiteName: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>
