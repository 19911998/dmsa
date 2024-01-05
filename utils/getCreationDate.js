export default function (page) {
  return new Date(page.createdAt).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}