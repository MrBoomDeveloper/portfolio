import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import { general } from "@data/header.json";
import styles from "./styles.module.scss";

interface NavigationItem {
	link: string,
	title: string,
	key: string
}

export const scrollWithOffset = (element: HTMLElement) => {
    const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
    const yOffset = -150; 

    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navigation({
	isActive,
	onToggle
}: {
	isActive: boolean,
	onToggle?: (isToggled: boolean) => void
}) {
	const { t } = useTranslation();
	
	return (
		<div className={`${styles.container} ${isActive && styles.containerActive}`}>
			<div className={styles.content}>
				{general.map(({link, title, key}: NavigationItem) => {
					return (
						<HashLink to={link} 
							scroll={el => scrollWithOffset(el)}
							className={styles.link}
							onClick={() => onToggle?.(false)} 
							key={key}>

							<p>{t(title)}</p>
						</HashLink>
					);
				})}
			</div>
		</div>
	);
}