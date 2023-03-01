import { useState } from "react";
import Navigation from "@components/layouts/Navigation";
import styles from "./styles";

export default function Header() {
	return (
		<div>
			<div className={styles.content}>
				<a href="/" className={styles.logo}>
					<h2>MrBoomDev</h2>
				</a>
				<Burger />
			</div>
			
			<Navigation />
		</div>
	);
}

function Burger({onToggle}) {
	const [isActive, setActive] = useState(false);
	
	return (
		<div className={styles.burger}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}