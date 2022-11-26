import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
          [
            'babel-plugin-jsx-pragmatic',
            {
              module: 'preact',
              import: 'h',
              export: 'h',
            },
          ],
        ],
      },
    }),
  ],
  meteor: {
    clientEntry: 'imports/ui/main.jsx',
  },
})
