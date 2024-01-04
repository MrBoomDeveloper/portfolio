export interface Project {
	name: string,
	description: string
}

export async function resolveProjectAsync(id: string | undefined): Promise<Project | null> {
	if(id == "" || id == undefined) {
		throw new Error("No project was specified");
	}

	//return import(`./${id}.json`);
	throw new Error("Stub!");
}