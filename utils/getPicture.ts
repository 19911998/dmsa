import { imageSize } from 'image-size'

const screens: Record<string, number> = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
}

export default function (img: { src: string, [key: string]: string } | undefined, viewWidths: string) {
  if (!img?.src) return

  const size = useState(img.src, () => imageSize('./public' + img.src))
  const { width, height } = size.value

  const widths = viewWidths.split(' ').reduce((acc, curr: string) => {
    const val = curr.split(':')
    if (val.length > 1) {
      acc[val[0]] = val[1]
    } else {
      acc.default = val[0]
    }
    return acc
  }, {} as Record<string, string>)

  let vw = ''
  const sizes = Object.keys(screens).reduce((acc, screen) => {
    vw = widths[screen] || vw || widths.default
    if (screens[screen] <= size.value.width) {
      acc += ` ${screen}:${vw}`
    }
    return acc
  }, '100vw')

  return {
    ...img,
    imgAttrs: { width, height },
    sizes,
    quality: 80,
    densities: 'x1',
    format: 'webp'
  }
}
