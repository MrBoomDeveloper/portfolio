import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { skills } from "@data/marks";
import Separator from "@components/base/separator";

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
				{Object.entries(skills).map(([id, {label, icon, hide}]) => {
					if(hide) return null;

					return (
						<img className={styles.skill} src={icon} 
							key={id} title={label} alt={label} />
					);
				})}
			</div>
		</div>
	);
}