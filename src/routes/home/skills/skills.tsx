import { useTranslation } from "react-i18next";
import styles from "./skills_styles.module.scss";
import { skills } from "@data/marks";
import Separator from "@components/separator";

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
				{Object.entries(skills).map(([id, {name, scale, url, svg, color, hide}]) => {
					if(hide) return null;

					return (<div style={{transform: `scale(${scale || 1})`}} key={id}>
						{svg ? <svg
							className={styles.skill}
							viewBox="0 0 24 24" 
							fill={`#${color}`}>

							<path d={svg} />
						</svg> : <img
							className={styles.skill} 
							src={url} 
							title={name} 
							alt={name} />}
					</div>)
				})}
			</div>
		</div>
	);
}