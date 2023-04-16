import { useTranslation } from "react-i18next";
import { Button } from "@components/base";
import styles from "./styles.module.scss";

export default function HomePage() {
	const { t } = useTranslation();
	
	return (
		<>
			<div className={styles.hero} id="hero">
				<BackgroundAnimation />
				<div className={styles.heroContent}>
					<p className={`${styles.fancyText} ${styles.highlight}`}>Frontend Developer</p>
					<h1 className={styles.title}>{t("home.hi")}</h1>
					<p className={styles.description}>{t("home.description")}</p>
					<a href="https://mrboomdev.ru" target="_blank">
						<Button text={t("home.more")} style={{paddingInline: "4rem"}} />
					</a>
				</div>
			</div>
			
			<div>
				<h1>{t("skills.title")}</h1>
				<p>{t("skills.description")}</p>
			</div>
			
			<div>
				<h1>{t("projects.title")}</h1>
			</div>
			
			<div>
				<h1>{t("contact.title")}</h1>
				<p>{t("contact.description")}</p>
			</div>
		</>
	);
}

function BackgroundAnimation() {
	return (
		<div className={styles.backgroundAnimation}>
			<div className={styles.square1}></div>
			<div className={styles.square2}></div>
			<div className={styles.square3}></div>
			<div className={styles.square4}></div>
			<div className={styles.square5}></div>
		</div>
	);
}