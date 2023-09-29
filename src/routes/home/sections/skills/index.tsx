import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Tag } from "@data/marks";

const skills: Tag[] = ["react", "typescript", "libgdx", "android", "java"];

export default function SkillsSection() {
	const { t } = useTranslation();

	return (
		<div className={styles.row}>
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