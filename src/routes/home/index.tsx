import { useTranslation } from "react-i18next";
import Button from "@components/base/button";
import Section from "./sections/Section";
import styles from "./styles.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import Projects from "./sections/projects";
import SkillsSection from "./sections/skills";
import ContactSection, { ContactSectionRef } from "./sections/contact";
import AboutMe from "./sections/aboutme";

export default function HomePage() {
	const projectsSection = useRef<HTMLDivElement>(null);
	const formSection = useRef<HTMLDivElement>(null);
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
				
				<div className={styles.heroContent} style={{translate: `0 ${offset / 5}px`, opacity: ((screen.height - (offset * 1.25)) / screen.height)}}>
					<p className={styles.highlight}>Frontend Developer</p>
					<h1 className={styles.title}>{t("home.hi")}</h1>
					<p className={styles.description}>{t("home.description")}</p>
					
					<div className={styles.actions}>
						<Button text={t("home.see_projects")} 
							className={styles.mainAction}
							style={{paddingInline: "2.4rem"}}
							icon="icon/expand.svg"
							iconStyle={{rotate: "-90deg"}}
							onPress={() => {
								const offset = (projectsSection.current?.offsetTop || 0) - 125;
								window.scrollTo({ top: offset, behavior: "smooth" })
							}} />

						<Button text={t("contact.title")} 
							style={{paddingInline: "2.4rem"}}
							className={styles.secondaryAction}
							onPress={() => {
								const offset = (formSection.current?.offsetTop || 0) - 150;
								window.scrollTo({ top: offset, behavior: "smooth" })
							}} />
					</div>
				</div>

				<FoxyAnimation />
			</div>

			<Section fill>
				<SkillsSection />
			</Section>

			{/* <Section>
				<AboutMe invert title="Bruh" 
					description="lamo." 
					banner="banner/binacty.jpg" />
			</Section>

			<Section fill>
				<AboutMe title="Bruh2" 
					description="lamo2." 
					banner="banner/binacty.jpg" />
			</Section> */}

			<Section>
				<div ref={projectsSection} />
				<Projects />
			</Section>
			
			<Section fill>
				<div style={{paddingBlock: "1rem"}} ref={formSection}>
					<ContactSection />
				</div>
			</Section>
		</>
	);
}

const FoxyAnimation = memo(() => {
	const image = useRef<HTMLImageElement>(null);
	const [isCaught, setIsCaught] = useState(false);

	if(isCaught) {
		return null;
	}

	return (
		<img src="art/foxy.gif" className={styles.heroFoxy} ref={image}
			title="Pixel foxy running" alt="Pixel foxy running"
			onClick={() => {
				//TODO: Change to a different image

				image.current.src = "https://media.tenor.com/E5OjPmVF0mgAAAAi/sus-amogus.gif";
				image.current.classList.add(styles.foxyCaught);

				setTimeout(() => image.current.style
					.animationPlayState = "paused", 125);

				setTimeout(() => {
					image.current.classList.add(styles.foxyKilled);

					setTimeout(() => {
						image.current.style.display = "none";
						image.current.className = "";

						setIsCaught(true);
					}, 1_000);
				}, 500);
			}} />
	);
});

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