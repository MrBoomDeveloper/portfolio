import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function HomePage() {
	return (
		<div>
			<h1 className={styles.title}>Home</h1>
			<Link to="privacy">Open Privacy</Link>
			<Link to="project/action">Open Project</Link>
		</div>
	);
}