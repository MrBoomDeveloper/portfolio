import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { general } from "@data/header.json";
import styles from "./styles.module.scss";

interface NavigationArguments {
	isActive: boolean
}

interface NavigationItem {
	link: string,
	title: string,
	key: string
}

export default function Navigation({isActive}: NavigationArguments) {
	const { t } = useTranslation();
	
	return (
		<div className={`${styles.container} ${isActive && styles.containerActive}`}>
			<div className={styles.content}>
				{general.map(({link, title, key}: NavigationItem) => {
					return (
						<Link to={link} className={styles.link} key={key}>
							<p>{t(title)}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}