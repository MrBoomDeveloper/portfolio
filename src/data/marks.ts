export type Tag = "android" | "rn" | "libgdx" | "java" | "react" | "typescript";

const names: Partial<Record<Tag, string>> = {
	android: "Android",
	rn: "React Native",
	libgdx: "LibGDX",
	java: "Java"
}

export function getTagName(id: Tag) {
	return names[id] || id;
}