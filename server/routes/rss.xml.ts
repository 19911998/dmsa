import { serverQueryContent } from '#content/server'
import RSS from 'rss'

const feed = new RSS({
  title: useRuntimeConfig().public.site_name as string,
  site_url: useRuntimeConfig().public.site_url as string,
  feed_url: useRuntimeConfig().public.site_url + '/rss.xml'
})

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find()
  const blogPosts = docs.filter((doc) => doc?._path?.includes('/blog'))

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: (useRuntimeConfig().public.site_url as string) + doc._path,
      date: doc.date,
      description: doc.description,
    })
  }

  const feedString = feed.xml({ indent: true })
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
