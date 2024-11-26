import { siAndroid, siExpress, siJetpackcompose, siKotlin, siMysql, siReact, siSass, siTypescript, siWebpack } from "simple-icons";

interface Skill {
	name: string,
	scale?: number,
	svg?: string,
	url?: string,
	color?: string,
	hide?: boolean
}

export type SkillName = keyof typeof skills

export const skills: Record<string, Skill> = {
	android: {
		name: "Android",
		color: "45ff7d",
		svg: siAndroid.path
	},

	react: {
		name: "React",
		color: siReact.hex,
		svg: siReact.path
	},

	compose: {
		name: "Compose",
		color: siJetpackcompose.hex,
		svg: siJetpackcompose.path
	},

	ts: {
		name: "TypeScript",
		color: "5b73fc",
		svg: siTypescript.path,
		scale: .95
	},

	kotlin: {
		name: "Kotlin",
		color: siKotlin.hex,
		svg: siKotlin.path,
		scale: .95
	},

	scss: {
		name: "Sass",
		color: "e175ff",
		svg: siSass.path
	},

	libgdx: {
		name: "LibGDX",
		url: "/icon/skill/libgdx.png"
	},

	express: {
		name: "Express",
		color: "ffffff",
		svg: siExpress.path,
		scale: 1.05
	},

	mysql: {
		name: "MySQL",
		color: "818fd4",
		svg: siMysql.path,
		scale: 1.2
	}
};

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;