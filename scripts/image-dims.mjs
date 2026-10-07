// scripts/image-dims.mjs
// Prints a ready-to-paste gallery line for every image in a folder, with its real size.
//
//   node scripts/image-dims.mjs public/starrik
//
// Then paste the lines into that project's `gallery` array and fill in each `alt` (and a `caption` if you have one).
// If you get "Cannot find package 'sharp'":  pnpm add -D sharp
import { readdirSync } from 'node:fs'
import sharp from 'sharp'

const dir = process.argv[2]
if (!dir) {
  console.error('Usage: node scripts/image-dims.mjs public/<folder>')
  process.exit(1)
}

const urlBase = dir.replace(/\\/g, '/').replace(/^public\//, '')
const files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))

for (const file of files.sort()) {
  const { width, height } = await sharp(`${dir}/${file}`).metadata()
  console.log(`{ src: '/${urlBase}/${file}', alt: '', width: ${width}, height: ${height} },`)
}
