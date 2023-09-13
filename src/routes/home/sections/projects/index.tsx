import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function Projects() {
	const { t } = useTranslation();

	return (
		<div className={styles.projects}>
			<h1 style={{marginBottom: "1rem"}}>{t("projects.title")}</h1>

			<Project title="Binacty Engine" banner="/banner/binacty.jpg"
				description="projects.binacty.description"
				link="https://gamejolt.com/games/actionplatformer/670228" />

			<Project title="Scrollix Browser" invert={true} />

			<Project title="BoomStudio" description="Code editor." />
		</div>
	);
}

export interface ProjectProps {
	title: string,
	description?: string,
	banner?: string,
	invert?: boolean,
	link?: string
}

function Project({title, description, banner, invert, link}: ProjectProps) {
	const { t } = useTranslation();

	const element = (
		<div className={`${styles.project} ${invert ? styles.projectReverse : ""}`}>
			{banner && <img src={banner} />}

			<div>
				<h3>{title}</h3>
				<p className={styles.description}>{t(description || "no_description")}</p>
			</div>
		</div>
	);

	return (link != null) 
		? (<Link to={link} target="_blank">{element}</Link>)
		: element;
}

export default memo(Projects);