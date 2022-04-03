import vuetify from '@vuetify/vite-plugin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir: string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons/dashboard')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    //自动导入API
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router'
      ]
    }),
    //自动导入组件
    Components({
      // relative paths to the directory to search for components.
      dirs: ['src/baseComponents'],
      // auto import for directives
      directives: true,
      dts: true,
      resolvers: [Vuetify3Resolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
