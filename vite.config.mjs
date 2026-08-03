import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', { target: '19' }]
        ]
      }
    })
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
