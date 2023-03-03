import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve as resolvePath } from "path";

const root = resolvePath(__dirname, "src");

export default defineConfig({
	root: "./src",
	base: "https://mrboomdev.ru/portfolio",
	publicDir: "./assets",
	
	resolve: {
		extensions: [".jsx", ".js", ".json", ".module.scss", ".scss"],
		alias: {
			"@components": resolvePath(root, "components"),
			"@data": resolvePath(root, "data"),
			"@utils": resolvePath(root, "utils"),
			"@pages": resolvePath(root, "pages"),
			"@assets": resolvePath(root, "assets"),
			"@etc": resolvePath(root, "etc")
		}
	},
	
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		assetsDir: "./assets"
	},
	
	plugins: [
		react()
	]
});