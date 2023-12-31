import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineEventHandler(() => {
  return readFileSync(resolve('./content/_schema.yml')).toString()
})