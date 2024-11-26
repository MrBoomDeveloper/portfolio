import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./root_styles.module.scss";
import Navigation from "@routes/root/navigation";
import ButtonExpand from "@components/button-expand";
import Header from "@routes/root/header/header";
import Footer from "@routes/root/footer/footer";

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