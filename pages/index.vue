<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const { data: blog } = await useAsyncData('blog', () => queryContent('blog/').sort({ createdAt: -1 }).limit(4).find())

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

<template>
  <div>
    <ULandingHero
      v-if="page.hero"
      v-bind="page.hero"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>
    </ULandingHero>

    <ULandingSection :title="page.blog.title" :links="page.blog.links">
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
            style="order: -2"
            :alt="item.image.alt"
            width="250"
            height="250"
            preset="blog"
          />
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
