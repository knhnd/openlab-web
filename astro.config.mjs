// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '💻 OpenLab',
			social: {
				discord: 'https://discord.gg/FxW5G2PCJF',
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
					label: 'Courses', slug: 'courses'
				},
				{
					label: 'Tutorials', slug: 'tutorials'
				},
				{
					label: 'Documents', slug: 'documents'
				},
				{
					label: 'Others', slug: 'others'
				},
			],
		}),
	],
});
