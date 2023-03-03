import { useState } from "react";
import { Navigation } from "@components/layouts";
import styles from "./styles";

const homeUrl = "https://mrboomdev.ru/portfolio"

export default function Header() {
	const [isNavigationActive, setNavigationActive] = useState(false);
	
	const toggleNavigation = isActive => {
		setNavigationActive(isActive);
	}
	
	return (
		<>
			<div className={styles.content}>
				<a href={homeUrl} className={styles.logo}>
					<h2>MrBoomDev</h2>
				</a>
				<Burger onToggle={toggleNavigation} />
			</div>
			
			<Navigation isActive={isNavigationActive} />
		</>
	);
}

function Burger({onToggle}) {
	const [isActive, setActive] = useState(false);
	
	const toggle = () => {
		onToggle(!isActive);
		setActive(!isActive);
	}
	
	return (
		<div className={styles.burger} onClick={toggle}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}