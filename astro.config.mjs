// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://msc.wephy.com",
	integrations: [
		starlight({
			title: 'MSc Dissertation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Theory',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'SketchySGD', slug: 'theory/sketchysgd'},
					],
				},
				{
					label: 'Paper reviews',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Challenges in Training PINNs: A Loss Landscape Perspective', slug: 'papers/rathore2024' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
