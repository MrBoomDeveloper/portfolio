import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Navigation } from "@components/layout";
import { ButtonExpand } from "@components/base";
import styles from "./styles.module.scss";

interface RootArguments {
	children?: any
}

export default function Root({children}: RootArguments) {
	const [isNavShown, setNavVisibility] = useState(false);
	
	return (
		<div className={styles.screen}>
			<Header>
				<ButtonExpand size="1.75rem" onToggle={setNavVisibility} className={styles.burger} />
				<Navigation isActive={isNavShown} />
			</Header>
			<Outlet />
			{children}
			<Footer />
		</div>
	);
}