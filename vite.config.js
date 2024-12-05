import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import shell from 'rollup-plugin-shell'
import dts from 'vite-plugin-dts'
import { version } from './package.json'

const banner = `/*!
  * design-react.js v${version}
  * Copyright(c) 2013-${new Date().getFullYear()}
  * Released under the MIT License.
  */`

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    shell({
      commands: [
        'rm -rf dist',
      ],
      hook: 'buildStart'
    }),
    dts({ rollupTypes: true })
  ],
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom/client'],
      output: {
        dir: `./dist`,
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          "react": "React",
          "react-dom/client": "ReactDOM"
        }
      }
    },
    lib: {
      entry: 'src/main.ts',
      name: 'DesignReact',
      fileName: (format) => {
        format = format.replace(/umd/, 'global')
        return `design-react.${format}.prod.js`
      },
      formats: ['umd', 'es']
    },
    cssCodeSplit: false
  }
})

