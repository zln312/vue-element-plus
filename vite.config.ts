/*
 * @Author: Zhao.Li.Nai
 * @Date: 2021-05-28 21:49:25
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-23 17:25:56
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return  `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return  `element-plus/lib/${name}`
        }
      }]
    })
  ],
})
