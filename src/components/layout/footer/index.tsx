import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { groups, social } from "@data/footer.json";
import styles from "./styles.module.scss";
import Separator from "@components/base/separator";
import { scrollWithOffset } from "../navigation";

interface FooterGroup {
	title: string,
	data: FooterItem[],
	key: string
}

interface FooterItem {
	title: string,
	link: string,
	key: string,
	icon?: string,
	external?: boolean
}

export default function Footer() {
	const { t } = useTranslation();
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>{t("footer.social")}</h2>
				<div className={styles.social}>
					{social.map(({link, title, icon, key}: FooterItem) => {
						return (
							<a href={link} target="_blank" key={key}>
								<div className={styles.iconHolder}>
									<img className={styles.icon}
										src={icon}
										alt={t(title) || "Failed to load"}
										title={t(title) || "Failed to load"} />
								</div>
							</a>
						);
					})}
				</div>
				
				<div className={styles.groups}>
					{groups.map(({title, data, key}: FooterGroup) => {
						return (
							<div className={styles.group} key={key}>
								<h2>{t(title)}</h2>
								{data.map(({title, external, link, key}: FooterItem) => {
									const text = <p className={styles.link}>{t(title)}</p>;
									
									if(!external) {
										return <Link to={link} key={key} onClick={() => {
											window.scrollTo({
												top: 0,
												left: 0,
												behavior: "smooth"
											});
										}}>{text}</Link>;
									} else {
										return <a href={link} target="_blank" key={key}>{text}</a>;
									}
								})}
							</div>
						);
					})}
				</div>
				
				<Separator />

				<p style={{marginTop: "2rem", display: "block", opacity: .9, lineHeight: 1.5}}>
					{t("footer.made")}

					<span style={{width: ".35rem", display: "inline-block"}}></span>
					<a href="https://www.flaticon.com" target="_blank">{t("footer.flaticon")} Flaticon.</a>
				</p>
			</div>
		</div>
	);
}