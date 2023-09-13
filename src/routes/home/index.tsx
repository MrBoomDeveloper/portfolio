import { useTranslation } from "react-i18next";
import Card from "@components/base/card";
import Button from "@components/base/button";
import Section from "./sections";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import Projects from "./sections/projects";
import Aboutme from "./sections/aboutme";

export default function HomePage() {
	const projectsSection = useRef<HTMLDivElement>(null);
	const { t } = useTranslation();
	
	return (
		<>
			<div className={styles.hero} id="hero">
				<BackgroundAnimation />
				<div className={styles.heroContent}>
					<p className={styles.highlight}>Frontend Developer</p>
					<h1 className={styles.title}>{t("home.hi")}</h1>
					<p className={styles.description}>{t("home.description")}</p>
					
					<div className={styles.actions}>
						<Button text={t("home.see_projects")} 
							style={{paddingInline: "2.4rem"}}
							onPress={() => {
								const offset = (projectsSection.current?.offsetTop || 0) - 100;
								window.scrollTo({ top: offset, behavior: "smooth" })
							}} />

						<Button text={t("contact.title")} 
							style={{paddingInline: "2.4rem"}}
							onPress={() => {
								const offset = (projectsSection.current?.offsetTop || 0) - 100;
								window.scrollTo({ top: offset, behavior: "smooth" })
							}} />
					</div>
				</div>

				<img src="art/foxy.gif" className={styles.heroFoxy}
					title="Pixel foxy running" alt="Pixel foxy running" />
			</div>

			<Section fill={true}>
				<div ref={projectsSection} />
				<Projects />
			</Section>
			
			<Section fill={false} style={{paddingBlock: 0}}>
				<div style={{display: "flex", position: "relative"}} className={styles.skills}>
					<div style={{paddingBlock: "3rem", flexGrow: 1}}>
						<h1 className={styles.sectionTitle}>{t("skills.title")}</h1>
						<div style={{display: "flex", flexWrap: "wrap"}} className={styles.skillsList}>
							<Card title="TypeScript" icon="/icon/skill/typescript.png" />
							<Card title="React" icon="/icon/skill/react.png" />
							<Card title="Sass" icon="/icon/skill/sass.png" />
							<Card title="Java" icon="/icon/skill/java.png" />
							<Card title="Android" icon="/icon/skill/android.png" />
							<Card title="LibGDX" icon="/icon/skill/game.png" />
						</div>
					</div>
					<img src="/art/freddy_programmer.png" className={styles.freddy} loading="lazy" />
				</div>
			</Section>

			<Section fill={true}>
				<Aboutme />
			</Section>
			
			{/*<Section fill={false} style={{paddingBlock: "3rem"}}>
				<h1 className={styles.sectionTitle}>{t("projects.title")}</h1>
			</Section>*/}
			
			{/*<Section fill={true} style={{paddingBlock: "3rem"}}>
				<div>
					<h1 className={styles.sectionTitle}>{t("contact.title")}</h1>
					<p>{t("contact.description")}</p>
					<form action="https://www.google.com" style={{display: "flex", flexDirection: "column", maxWidth: "500px", gap: ".5rem"}}>
						<input type="email" placeholder="Email" style={{padding: ".5em", color: "black"}} />
						<input type="text" placeholder="Your Name" style={{padding: ".5em", color: "black"}} />
						<textarea placeholder="Your Message..." style={{padding: ".5em", color: "black", height: "5rem"}} />
						<Button text="Submit" />
					</form>
				</div>
			</Section>*/}
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