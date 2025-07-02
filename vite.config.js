//@fix:このvite.config.jsファイルの中に下記のようなコードをかいて、そして
//これとは別でjsconfig.jsonファイルを新たに作成し、その中にまた別のコードを書けば
//srcフォルダ直下を@としてパス指定を楽に行うことが出来る。。
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
