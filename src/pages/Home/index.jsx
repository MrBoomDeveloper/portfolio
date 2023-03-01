import styles from "./styles.module.scss";
import { Header } from "@components/layouts"
import tabs from "@data/headerTabs";

export default Home() {
	return (
		<div className={styles.screen}>
			<Header />
		</div>
	);
}