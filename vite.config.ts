import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    SearchPlugin({
      tokenize: 'full',
      previewLength: 62,
      buttonLabel: '搜索',
      placeholder: '请输入要搜索的内容'
    })
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..']
    }
  },
  ssr: {
    noExternal: ['maotu']
  }
});
