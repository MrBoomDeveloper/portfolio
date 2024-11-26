import { resolve } from "path";
import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const src = resolve(__dirname, "src");

const global: UserConfig = {
	resolve: {
		alias: {
			"@root": __dirname,
			"@src": src,
			"@assets": resolve(src, "assets"),
			"@components": resolve(src, "components"),
			"@routes": resolve(src, "routes"),
			"@data": resolve(src, "data")
		},
		
		extensions: [".tsx", ".ts", ".json", ".module.scss"]
	},
	
	plugins: [
		react(),
		ViteImageOptimizer()
	]
}

const dev: UserConfig = {
	...global,
	
	build: {
		minify: false,
		watch: {}
	},
	
	server: {
		host: true
	}
}

const prod: UserConfig = {
	...global,
	base: "/",
	
	build: {
		minify: true
	}
}

export default defineConfig(({ command }) => {
	return command === "serve" ? dev : prod;
});