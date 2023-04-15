import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/layout";
import styles from "./styles";

export default function Root() {
	return (
		<div className={styles.screen}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}