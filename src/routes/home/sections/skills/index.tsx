import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Tag } from "@data/marks";
import Separator from "@components/base/separator";

const skills = ["React", "TypeScript", "Sass", "MySQL", "Express", "Webpack", "LibGDX", "Android", "Java"];

export default function SkillsSection() {
	const { t } = useTranslation();

	return (
		<div className={styles.row} id="skills">
			<div className={styles.header}>
				<Separator className={styles.mobileSeparator} />

				<h1 className={styles.title}>{t("skills.title")}</h1>

				<Separator className={styles.mobileSeparator} />
			</div>

			<Separator className={styles.desktopSeparator} horizontal={false} />

			<div className={styles.items}>
				{skills.map(skill => {
					const path = `/icon/skill/${skill.toLowerCase()}.png`;

					return (
						<img className={styles.skill} src={path} 
							key={skill} title={skill} alt={skill} />
					);
				})}
			</div>
		</div>
	);
}