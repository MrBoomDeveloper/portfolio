import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/layout";
import styles from "./styles.module.scss";

export default function Root() {
	return (
		<div className={styles.screen}>
			<Header>
				<h1>Burger</h1>
			</Header>
			<Outlet />
			<Footer />
		</div>
	);
}