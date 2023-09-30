import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Tag } from "@data/marks";

const skills: Tag[] = ["react", "sass", "typescript", "webpack", "libgdx", "android", "java"];

export default function SkillsSection() {
	const { t } = useTranslation();

	return (
		<div className={styles.row} id="skills">
			<h1>{t("skills.title")}</h1>

			<div className={styles.separator}></div>

			<div className={styles.items}>
				{skills.map(skill => {
					const path = `/icon/skill/${skill}.png`;

					return (
						<img className={styles.skill} src={path} />
					);
				})}
			</div>
		</div>
	);
}