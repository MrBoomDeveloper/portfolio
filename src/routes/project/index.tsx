import { Project, resolveProjectAsync } from "@data/projects";
import { ErrorPage } from "@routes"; 
import { useEffect, useState } from "react";
import { useHref, useNavigate, useNavigation, useParams } from "react-router-dom";

export default function ProjectPage() {
	const { projectId } = useParams();
	const [ error, setError ] = useState<unknown>(null);
	const [ project, setProject ] = useState<Project | null>(null);

	useEffect(() => {
		resolveProjectAsync(projectId)
			.then(setProject)
			.catch(setError);
	}, [projectId]);

	if(error != null) {
		return <ErrorPage />
	}

	return <h1>{project?.name || "Loading..."}</h1>;
}