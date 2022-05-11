const path = require('path')
const pkg = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

const resolve = dir => {
	return path.join(__dirname, dir)
}

module.exports = {
	pages: {
		index: {
			entry: './play/main.ts',
		},
	},
	productionSourceMap: false,
	assetsDir: './',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true,
		disableHostCheck: true,
	},
	css: {
		extract: process.env.VUE_APP_BUILD_MODE === 'NPM',
		sourceMap: false,
	},
	configureWebpack: config => {
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		if (process.env.VUE_APP_BUILD_MODE === 'NPM') {
			// config.externals = [{}]
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('packages'))
		config.plugin('define').tap(args => {
			args[0]['process.env'].version = JSON.stringify(pkg.version)
			return args
		})
		config.module.rule('svg').exclude.add(resolve('packages/svg')).end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('packages/svg'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'cake-ui-[name]',
			})
			.end()
		if (isProduction) {
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
