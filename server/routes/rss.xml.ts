import { serverQueryContent } from '#content/server'
import RSS from 'rss'

const feed = new RSS({
  title: process.env.NUXT_SITE_NAME as string,
  site_url: process.env.NUXT_PUBLIC_SITE_URL as string,
  feed_url: process.env.NUXT_PUBLIC_SITE_URL + '/rss.xml'
})

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
  const blogPosts = docs.filter((doc) => doc?._path?.includes('/blog'))

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: (process.env.NUXT_PUBLIC_SITE_URL as string) + doc._path,
      date: doc.date,
      description: doc.description,
    })
  }

  const feedString = feed.xml({ indent: true })
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
