export const skills = {
	android: {
		label: "Android",
		icon: "https://cdn.simpleicons.org/android/45ff7d",
		hide: false
	},

	react: {
		label: "React",
		icon: "https://cdn.simpleicons.org/react",
		hide: false
	},

	libgdx: {
		label: "LibGDX",
		icon: "/icon/skill/libgdx.png",
		hide: false
	},

	scss: {
		label: "Sass",
		icon: "https://cdn.simpleicons.org/sass",
		hide: false
	},

	webpack: {
		label: "Webpack",
		icon: "https://cdn.simpleicons.org/webpack/6eb6ff",
		hide: false
	},

	ts: {
		label: "TypeScript",
		icon: "https://cdn.simpleicons.org/typescript/5b73fc",
		hide: false
	},

	kotlin: {
		label: "Kotlin",
		icon: "https://cdn.simpleicons.org/kotlin",
		hide: false
	},

	express: {
		label: "Express",
		icon: "https://cdn.simpleicons.org/express/ffffff",
		hide: false
	},

	mysql: {
		label: "MySQL",
		icon: "https://cdn.simpleicons.org/mysql/6eb6ff",
		hide: false
	},

	rn: {
		label: "React Native",
		icon: "https://cdn.simpleicons.org/react",
		hide: true
	}
} as const;

export type Skill = keyof typeof skills;

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;