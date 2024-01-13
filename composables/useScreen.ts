import { breakpointsTailwind } from '@vueuse/core'

export default function () {
  return process.client ? useBreakpoints(breakpointsTailwind) : {}
}
