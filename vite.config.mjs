import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const VENDOR_CHUNKS = {
  'vendor-react': ['react', 'react-dom', 'react-router'],
  'vendor-swipeable': ['react-swipeable'],
  'vendor-vercel': ['@vercel/analytics', '@vercel/speed-insights'],
}

const matchVendor = (id) => {
  if (!id.includes('node_modules')) return undefined
  for (const [chunk, pkgs] of Object.entries(VENDOR_CHUNKS)) {
    if (pkgs.some((p) => id.includes(`/node_modules/${p}/`) || id.includes(`\\node_modules\\${p}\\`))) {
      return chunk
    }
  }
  return undefined
}

export default defineConfig({
  // @vitejs/plugin-react v6 dropped its `babel` option; React Compiler now
  // runs through @rolldown/plugin-babel.
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset({ target: '19' })] }),
  ],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: matchVendor,
      }
    }
  }
})
