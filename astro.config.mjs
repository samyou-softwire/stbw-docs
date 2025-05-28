// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/samyou-softwire/stbw-docs' }],
			sidebar: [
				{
					label: 'Tablet troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
			],
		}),
	],
	site: 'https://samyou-softwire.github.io',
	base: '/stbw-docs/',
});
