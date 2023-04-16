import { Link } from "react-router-dom";
import { general } from "@data/header.json";
import styles from "./styles.module.scss";

interface NavigationArguments {
	isActive: boolean
}

interface NavigationItem {
	link: string,
	title: string
}

export default function Navigation({isActive}: NavigationArguments) {
	return (
		<div className={`${styles.container} ${isActive && styles.containerActive}`}>
			<div className={styles.content}>
				{general.map(({link, title}: NavigationItem) => {
					return (
						<Link to={link} className={styles.link}>
							<p>{title}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}