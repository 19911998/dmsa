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

      <NuxtImg
        v-if="page.hero.image?.src"
        v-bind="getImage(page.hero.image, '100vw md:50vw')"
        class="mx-auto"
      />
    </ULandingHero>

    <ULandingSection
      v-for="key of Object.keys(page.cards)"
      v-bind="page.cards[key]"
      :id="key"
      :key="key"
      :ui="{ container: 'gap-8 sm:gap-8', description: 'max-w-3xl', links: '!mt-4', headline: 'headline text-lg' }"
    >
      <UBlogList v-if="key === 'blog'">
        <UBlogPost
          v-for="(post, index) in blog"
          :key="index"
          :to="post._path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="formatDate(post.date)"
          :badge="post.badge"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogList>
    </ULandingSection>
  </div>
</template>

<script setup lang="ts">
const headerLinks = useState('header-links', () => [])

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
const { data: blog } = await useAsyncData('blog-entries', () => queryContent('blog').sort({ date: -1 }).limit(4).find())

headerLinks.value = Object.keys(page.value.cards).map(key => ({
  label: page.value.cards[key].headline,
  to: '#' + key,
  exactHash: true,
  activeClass: 'text-primary'
}))

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

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.closest('[id]').getAttribute('id')
      const link = headerLinks.value.find(({ to }) => to === '#' + id)
      if (link) {
        link.active = entry.isIntersecting
      }
    })
  }, {
    threshold: 1.0
  })
  // Track all sections that have an `id` applied
  document.querySelectorAll('div[id] > div').forEach((section) => {
    observer.observe(section)
  })
})
</script>
