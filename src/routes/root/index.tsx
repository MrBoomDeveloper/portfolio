import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/layout";
import { ButtonExpand } from "@components/base";
import styles from "./styles.module.scss";

export default function Root() {
	const [isNavShown, setNavVisibility] = useState(false);
	
	return (
		<div className={styles.screen}>
			<Header>
				<ButtonExpand size="2rem" onToggle={setNavVisibility} />
			</Header>
			<Outlet />
			<Footer />
		</div>
	);
}