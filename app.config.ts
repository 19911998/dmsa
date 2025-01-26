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
        right: 'hidden lg:flex',
        center: 'mt-0',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
      links: {
        wrapper: '!flex-row'
      }
    }
  },
  seo: {
    siteName: 'doku-soziale-arbeit.de | Eine Dokumentation über die Soziale Arbeit mit Neonazis.',
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
    credits: 'Dokumentation über die Soziale Arbeit mit Neonazis &middot; &copy;&nbsp;2024',
    colorMode: false,
    links: [{
      label: 'Intro',
      to: '/#intro'
    }, {
      label: 'Blog',
      to: '/blog/'
    }, {
      label: 'Karte',
      to: '/map/'
    }],
    icons: [{
      icon: 'i-simple-icons-nuxtdotjs',
      to: 'https://nuxt.com',
      target: '_blank',
      'aria-label': 'Nuxt Website'
    }]
  }
})