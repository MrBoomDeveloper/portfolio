import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { groups, social } from "@data/footer.json";
import styles from "./styles.module.scss";

interface FooterGroup {
	title: string,
	data: FooterItem[]
}

interface FooterItem {
	title: string,
	link: string,
	icon?: string,
	external?: boolean
}

export default function Footer() {
	const { t } = useTranslation();
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.groups}>
					{groups.map(({title, data}: FooterGroup) => {
						return (
							<div className={styles.group}>
								<h2>{t(title)}</h2>
								{data.map(({title, external, link}: FooterItem) => {
									const text = <p className={styles.link}>{t(title)}</p>;
									
									if(!external) {
										return <Link to={link}>{text}</Link>;
									} else {
										return <a href={link} target="_blank">{text}</a>;
									}
								})}
							</div>
						);
					})}
				</div>
				
				<h2>{t("footer.social")}</h2>
				<div className={styles.social}>
					{social.map(({link, title, icon}: FooterItem) => {
						return (
							<a href={link} target="_blank">
								<div className={styles.iconHolder}>
									<img className={styles.icon}
										src={icon}
										alt={t(title)}
										title={t(title)} />
								</div>
							</a>
						);
					})}
				</div>
				
				<div className={styles.separator}></div>
				<p style={{marginTop: "2rem", display: "block", opacity: .9}}>{t("footer.made")}</p>
			</div>
		</div>
	);
}