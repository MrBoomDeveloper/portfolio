import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./projects_styles.module.scss";
import { Link } from "react-router-dom";
import { SkillName, skills } from "@src/data/marks";
import Separator from "@components/separator";
import clsx from "clsx";

function Projects() {
	const { t } = useTranslation();

	return (
		<div className={styles.section} id="projects">
			<div className={styles.sectionHeader}>
				<h1 className={styles.sectionTitle}>{t("projects.title")}</h1>
				<Separator style={{alignSelf: "center"}} />
			</div>

			<Project title="Awery" banner="https://raw.githubusercontent.com/MrBoomDeveloper/Awery/master/docs/screenshot1.jpg"
				tags={["kotlin", "android"]}
				description="projects.awery.description"
				link="https://github.com/MrBoomDeveloper/Awery" />

			<Project title="Binacty" banner="/banner/binacty.jpg"
				tags={["libgdx", "android"]} invert
				description="projects.binacty.description"
				link="https://gamejolt.com/games/actionplatformer/670228" />

			{/* <Project title="Scrollix Browser" banner="/banner/scrollix.jpg"
				tags={["android", "java"]}
				description="The most Customizable mobile Web Browser!"
				link="https://github.com/MrBoomDeveloper/Scrollix" /> */}
		</div>
	);
}

export interface ProjectProps {
	title: string,
	description?: string,
	banner?: string,
	invert?: boolean,
	link?: string,
	tags?: SkillName[]
}

function Project({title, description, banner, invert, link, tags}: ProjectProps) {
	const { t } = useTranslation();

	const element = (
		<div className={clsx(styles.project, invert && styles.projectReverse)}>
			{banner && <div className={styles.projectBanner}>
				<img src={banner} title={title} alt={title} />
			</div>}

			<div className={styles.projectInfo}>
				<div className={styles.projectHeader}>
					<h3 className={styles.projectTitle}>{title}</h3>
					<span></span>
				</div>
				
				{tags && <div className={styles.projectTags}>
					{tags.map(tag => {
						return (
							<div key={tag}>
								<span>{skills[tag].name}</span>
							</div>
						);
					})}
				</div>}

				<div className={styles.projectDescription}>
					<p>{t(description || "no_description")}</p>
				</div>
			</div>
		</div>
	);

	return (link != null) 
		? (<Link to={link} target="_blank">{element}</Link>)
		: element;
}

export default memo(Projects);