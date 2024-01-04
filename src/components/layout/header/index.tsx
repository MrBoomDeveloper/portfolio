import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { scrollToTop } from "@src/util/navigation";

export default function Header({children}: {children?: JSX.Element | JSX.Element[]}) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	
	useEffect(() => {
		function scrollListener() {
			const newIsScrolled = window.scrollY > 50;
			if(newIsScrolled == isScrolled) return;

			setIsScrolled(newIsScrolled);
		}

		function resizeListener() {
			const shouldHide = (window.visualViewport.height < 150);
			if(shouldHide == isHidden) return;

			setIsHidden(shouldHide);
		}

		window.addEventListener("scroll", scrollListener);
		window.visualViewport.addEventListener("resize", resizeListener);

		resizeListener();
		scrollListener();

		return () => {
			window.removeEventListener("scroll", scrollListener);
			window.visualViewport.removeEventListener("resize", resizeListener);
		}
	}, [isHidden, isScrolled]);
	
	return (
		<div className={styles.container + ` ${isScrolled ? styles.active : ""} ${isHidden ? styles.hidden : ""}`}>
			<div className={styles.content}>
				<Link to="/" onClick={scrollToTop}>
					<h1 className={styles.logo}>MrBoomDev</h1>
				</Link>
				
				<span style={{flexGrow: 1}} />
				{children}
			</div>
		</div>
	);
}