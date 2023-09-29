import { useTranslation } from "react-i18next";
import Button from "@components/base/button";
import Section from "./sections";
import styles from "./styles.module.scss";
import { useRef } from "react";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";

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

			<Section fill>
				<SkillsSection />
			</Section>

			<Section>
				<div ref={projectsSection} />
				<Projects />
			</Section>

			{/* <Section fill>
				<Aboutme />
			</Section> */}
			
			{/* <Section fill style={{paddingBlock: "3rem"}}>
				<div>
					<h1>{t("contact.title")}</h1>
					<p>{t("contact.description")}</p>

					<form action="https://www.google.com" style={{display: "flex", flexDirection: "column", maxWidth: "500px", gap: ".5rem"}}>
						<input type="email" placeholder="Email" style={{padding: ".5em", color: "black"}} />
						<input type="text" placeholder="Your Name" style={{padding: ".5em", color: "black"}} />
						<textarea placeholder="Your Message..." style={{padding: ".5em", color: "black", height: "5rem"}} />
						<Button text="Submit" />
					</form>
				</div>
			</Section> */}
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