import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Tag, getTagName } from "@src/data/marks";

function Projects() {
	const { t } = useTranslation();

	return (
		<div className={styles.projects}>
			<h1 style={{marginBottom: "1rem"}}>{t("projects.title")}</h1>

			<Project title="Binacty Engine" banner="/banner/binacty.jpg"
				tags={["rn", "libgdx", "android"]}
				description="projects.binacty.description"
				link="https://gamejolt.com/games/actionplatformer/670228" />

			<Project title="Scrollix Browser" banner="/banner/scrollix.jpg" invert
				tags={["android", "java"]}
				description="The most Customizable mobile Web Browser!"
				link="https://github.com/MrBoomDeveloper/Scrollix" />

			{/* <Project title="Skayrix"
				tags={["libgdx", "android", "java"]} /> */}

			{/* <Project title="BoomStudio" invert
				tags={["Android"]} /> */}
		</div>
	);
}

export interface ProjectProps {
	title: string,
	description?: string,
	banner?: string,
	invert?: boolean,
	link?: string,
	tags?: Tag[]
}

function Project({title, description, banner, invert, link, tags}: ProjectProps) {
	const { t } = useTranslation();

	const element = (
		<div className={`${styles.project} ${invert ? styles.projectReverse : ""}`}>
			{banner && <div className={styles.banner}>
				<img src={banner} />
			</div>}

			<div className={styles.info}>
				<div className={styles.projectHeader}>
					<h3>{title}</h3>
					<span></span>
				</div>
				
				{tags && <div className={styles.tags}>
					{tags.map(tag => {
						return (
							<div>
								<span>{getTagName(tag)}</span>
							</div>
						);
					})}
				</div>}

				<div className={styles.description}>
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