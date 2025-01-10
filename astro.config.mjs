// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '💻 OpenLab',
			social: {
				discord: 'https://github.com/withastro/starlight',
			},
			customCss: [
				// カスタムCSSファイルへの相対パス
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Home', slug: 'index'
				},
				{
					label: 'About', slug: 'about'
				},
				{
					label: 'Courses',
					items: [
						{ label: 'Web入門と情報リテラシー', slug: 'guides/example' },
						{ label: 'Webコミュニケーション', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
