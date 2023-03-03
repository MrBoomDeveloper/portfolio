import { Hero, Skills } from "./sections";
import styles from "./styles.module";

export default function Home() {
	return (
		<div className={styles.screen}>
			<Hero />
			<Skills />
		</div>
	);
}