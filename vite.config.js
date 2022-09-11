import { string } from 'rollup-plugin-string'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    // generate manifest.json in outDir
    manifest: true
  },
  plugins: [
    string({
      include: '**/*.txt',
    }),
  ],
  'optimizeDeps.include': ['valtio/vanilla'],
}
