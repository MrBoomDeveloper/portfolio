import { resolve } from "path";
import { UserConfig, defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const root = resolve(__dirname, "src");

const global: UserConfig = {
	resolve: {
		alias: {
			"@assets": resolve(root, "assets"),
			"@components": resolve(root, "components"),
			"@routes": resolve(root, "routes"),
			"@data": resolve(root, "data"),
			"@": root
		},
		
		extensions: [".tsx", ".ts", ".json", ".module.scss", ".scss"]
	},
	
	plugins: [
		react()
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

export default defineConfig(({ command, mode, ssrBuild }) => {
	return command === "serve" ? dev : prod;
});