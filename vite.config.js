import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	root: "./src",
	base: "https://me.mrboomdev.ru",
	publicDir: "./assets",
	
	resolve: {
		extensions: [".jsx", ".js", ".json", ".module.scss", ".scss"],
		alias: {
			"@components": "./components",
			"@data": "./data",
			"@utils": "./utils",
			"@pages": "./pages",
			"@assets": "./assets",
			"@etc": "./etc"
		}
	},
	
	build: {
		outDir: "../docs",
		assetsDir: "./assets",
		watch: {}
	},
	
	plugins: [
		react()
	]
});