export default defineAppConfig({
  ui: {
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    primary: 'sky',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: process.env.NUXT_SITE_NAME,
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: []
  },
  footer: {
    credits: '»Du musst sie akzeptieren!« &middot; &copy&nbsp;2024',
    colorMode: false,
    links: [{
      title: 'Einführung',
      icon: 'i-heroicons-information-circle',
      to: '/#intro'
    },
    {
      title: 'Karte',
      icon: 'i-heroicons-map',
      to: '/map'
    }, {
      title: 'Blog',
      icon: 'i-heroicons-rectangle-stack',
      to: '/blog'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }]
    }
  }
})