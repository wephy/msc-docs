// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


// https://astro.build/config
export default defineConfig({
	site: "https://msc.wephy.com",
	integrations: [
		starlight({
			title: 'MSc Dissertation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Experiments',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Adam + LBFGS, Varying memory', slug: 'experiments/test'},
					],
				},
				{
					label: 'Notes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '2025-06-12', slug: 'notes/2025_06_12'},
					],
				},
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
			head: [
				{
				  tag: 'link',
				  attrs: {
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css',
				  },
				},
			  ],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	  },
});
