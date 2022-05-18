module.exports = {
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.output.publicPath = 'https://raw.githubusercontent.com/cakev/cakev-ui/gh-pages/'
		}
	},
	theme: '',
	title: 'CakeV-UI',
	description: 'CakeV-UI的组件库文档教程示例代码',
	themeConfig: {
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '组件',

				link: '/comps/',
			},
		],
		sidebar: {
			'/comps/': [
				'/comps/',
				'/comps/svg.md',
				'/comps/badge.md',
				'/comps/row.md',
				'/comps/column.md',
				'/comps/input.md',
				'/comps/label.md',
				'/comps/select.md',
				'/comps/slider.md',
				'/comps/switch.md',
				'/comps/code.md',
				'/comps/tooltip.md',
			],
		},
	},
	head: [
		['script', { src: 'https://unpkg.com/vue@2.6.14/dist/vue.min.js' }],
		['script', { src: 'https://unpkg.com/@cakev/ui/dist/ui.umd.min.js' }],
		['link', { rel: 'stylesheet', href: 'https://unpkg.com/@cakev/ui/dist/ui.css' }],
	],
	plugins: [['demo-block']],
}
