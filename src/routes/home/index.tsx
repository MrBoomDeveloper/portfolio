import { useTranslation } from "react-i18next";
import Button from "@components/base/button";
import Section from "./sections";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";
import ContactSection, { ContactSectionRef } from "./sections/contact";

export default function HomePage() {
	const projectsSection = useRef<HTMLDivElement>(null);
	const formSection = useRef<ContactSectionRef>(null);
	const { t } = useTranslation();
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function onScroll() {
			setOffset(window.scrollY);
		}

		window.addEventListener("scroll", onScroll);

		return () => removeEventListener("scroll", onScroll);
	}, [offset]);
	
	return (
		<>
			<div className={styles.hero} id="hero">
				<BackgroundAnimation />
				
				<div className={styles.heroContent} style={{translate: `0 ${offset / 5}px`, opacity: ((screen.height - offset * 1.5) / screen.height)}}>
					<p className={styles.highlight}>Frontend Developer</p>
					<h1 className={styles.title}>{t("home.hi")}</h1>
					<p className={styles.description}>{t("home.description")}</p>
					
					<div className={styles.actions}>
						<Button text={t("home.see_projects")} 
							style={{paddingInline: "2.4rem"}}
							onPress={() => {
								const offset = (projectsSection.current?.offsetTop || 0) - 125;
								window.scrollTo({ top: offset, behavior: "smooth" })
							}} />

						<Button text={t("contact.title")} 
							style={{paddingInline: "2.4rem"}}
							onPress={() => {
								const offset = (formSection.current?.getY() || 0) - 150;
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
			
			<Section fill style={{paddingBlock: "3rem"}}>
				<ContactSection reference={formSection} />
			</Section>
		</>
	);
}

function BackgroundAnimation() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function onScroll() {
			setOffset(window.scrollY);
		}

		window.addEventListener("scroll", onScroll);

		return () => removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className={styles.backgroundAnimation} style={{translate: `0 ${offset / 2}px`}}>
			<div className={styles.square1}></div>
			<div className={styles.square2}></div>
			<div className={styles.square3}></div>
			<div className={styles.square4}></div>
			<div className={styles.square5}></div>
		</div>
	);
}