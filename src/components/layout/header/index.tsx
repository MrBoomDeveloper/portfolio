import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header({children}: {children?: JSX.Element | JSX.Element[]}) {
	const [isScrolled, setIsScrolled] = useState(false);
	
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const newIsScrolled = window.scrollY > 50;
			setIsScrolled(newIsScrolled);
		});
	}, []);
	
	return (
		<div className={`${styles.container} ${isScrolled && styles.containerActive}`}>
			<div className={styles.content}>
				<Link to="/">
					<h1 className={styles.logo}>MrBoomDev</h1>
				</Link>
				
				<span style={{flexGrow: 1}} />
				{children}
			</div>
		</div>
	);
}