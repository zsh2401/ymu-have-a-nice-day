import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WorkboxPlugin from "workbox-webpack-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
const config: webpack.Configuration = {
	entry: {
		app: path.resolve(__dirname, '../src/AppLoader.ts'),
		"404": path.resolve(__dirname, '../src/404redirector.ts')
	},

	output: {
		filename: 'js/[name].bundle.[hash].js',
		chunkFilename: 'js/[name].chunk.[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/",
	},

	module: {
		rules: [
			{ test: /\.(ts|tsx)?$/, loader: 'ts-loader' },

			{
				test: /\.(html)$/,
				loader: "html-loader"
			},

			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'  // Put css to <style/>
					},
					{
						loader: 'css-loader?modules=true'    // parse css
					}
				]
			},

			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/,
				use: {
					loader: 'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},
	// externals: helper.EXTERNALS,

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../src/AppPage.html"),
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true// 压缩内联css
			},
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../src/AppPage.html"),
			filename: "404.html",
			title: "404redictor",
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true// 压缩内联css
			},
			chunks: ["404"]
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../public"),
					to: path.resolve(__dirname, "../dist")
				}
			]
		}),
		new webpack.DefinePlugin({
			"CTIME": JSON.stringify(new Date().toLocaleString())
		}),
		new CleanWebpackPlugin(),

		//https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),

		new WorkboxPlugin.GenerateSW({
			skipWaiting: true
		})
	],

	optimization: {
		// minimizer: [
		// 	new UglifyJsPlugin({
		// 		uglifyOptions: {
		// 			compress: true
		// 		}
		// 	})
		// ],
		splitChunks: {
			cacheGroups: {
				// vendors: {
				// 	name:"vendors",
				// 	priority: -10,
				// 	chunks:'initial',
				// 	test: /[\\/]node_modules[\\/]/
				// },
			},
			// name: true,
			chunks: 'async',
			minSize: 20000,
			minRemainingSize: 0,
			// maxSize: 0,
			// maxSize: 
		}
	},

	//@ts-ignore
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		open: false,
		host: "0.0.0.0",
		port: 5000,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css', '.jpg']
	}
};

export default config;