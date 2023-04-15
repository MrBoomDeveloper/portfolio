import { resolve } from "path";
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const root = resolve(__dirname, "src");

const global = {
	publicDir: "/src/assets/",
	
	resolve: {
		alias: {
			"@assets": resolve(root, "assets"),
			"@components": resolve(root, "components"),
			"@routes": resolve(root, "routes"),
			"@": root
		},
		
		extensions: [".tsx", ".ts", ".json", ".module.scss", ".scss"]
	},
	
	plugins: [
		react()
	]
}

const dev = {
	...global,
	
	build: {
		minify: false,
		watch: {}
	}
}

const prod = {
	...global,
	base: "/portfolio/",
	
	build: {
		minify: "esbuild"
	}
}

export default defineConfig(({ command, mode, ssrBuild }) => {
	return command === "serve" ? dev : prod;
});