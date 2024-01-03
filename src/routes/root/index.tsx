import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/layout";
import styles from "./styles.module.scss";
import Navigation from "@components/layout/navigation";
import ButtonExpand from "@components/base/button-expand";

interface RootArguments {
	children?: any
}

export default function Root({children}: RootArguments) {
	const [isNavShown, setNavVisibility] = useState(false);
	
	return (
		<div className={styles.screen}>
			<Header>
				<ButtonExpand size="1.75rem" 
					isActive={isNavShown}
					onClick={() => setNavVisibility(!isNavShown)} 
					className={styles.burger} />

				<Navigation isActive={isNavShown} 
					onToggle={isToggled => setNavVisibility(isToggled)} />
			</Header>
			
			<Outlet />

			{children}

			<Footer />
		</div>
	);
}