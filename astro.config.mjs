// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://knhnd.github.io/openlab-web/',
  base: '/openlab-web/',  // GitHub Pages 用のベースパス
  integrations: [
    starlight({
      title: '🧪 OpenLab',
      social: {
        discord: 'https://discord.gg/FxW5G2PCJF',
      },
      customCss: [
        './src/styles/custom.css',  // カスタムCSSファイルへの相対パス
      ],
      sidebar: [
        {
          label: '🏠 Home',
          slug: 'index',
        },
        {
          label: '💻 Courses',
          slug: 'courses',
        },
        {
          label: '📝 Tutorials',
          slug: 'tutorials',
        },
        {
          label: '🗂️ Documents',
          slug: 'documents',
        },
        {
          label: '📚 Research',
          slug: 'research',
        },
        {
          label: '🚀 Others',
          slug: 'others',
        },
      ],
    }),
  ],
});
