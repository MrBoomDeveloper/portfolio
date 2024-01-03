import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { Tag } from "@data/marks";
import Separator from "@components/base/separator";

const skills: Tag[] = ["react", "sass", "typescript", "webpack", "libgdx", "android", "java"/*, "express"*/];

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
					const path = `/icon/skill/${skill}.png`;

					return (
						<img className={styles.skill} src={path} />
					);
				})}
			</div>
		</div>
	);
}