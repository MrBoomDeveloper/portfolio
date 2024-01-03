export type Tag = "android" | "rn" | "libgdx" | "java" | "react" | "typescript" | "sass" | "webpack" | "express" | "mysql";

const names: Partial<Record<Tag, string>> = {
	android: "Android",
	rn: "React Native",
	libgdx: "LibGDX",
	java: "Java",
	mysql: "MySQL"
}

export function getTagName(id: Tag) {
	return names[id] || id;
}

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;