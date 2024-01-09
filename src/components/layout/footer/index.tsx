import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { groups, social } from "@data/footer.json";
import styles from "./styles.module.scss";
import Separator from "@components/base/separator";
import { scrollToTop } from "@src/util/navigation";

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
	isExternal?: boolean
}

function Item({ item: { link, title, icon, key, isExternal } }: { item: FooterItem }) {
	const { t } = useTranslation();
	let element: JSX.Element;

	element = (icon != null)
		? (
			<div className={styles.iconHolder}>
				<img className={styles.icon} src={icon}
					alt={t(title)} title={t(title)} />
			</div>
		) : (
			<p className={styles.link}>
				{t(title)}
			</p>
		);

	return isExternal
		? (<a href={link} target="_blank" key={key}>{element}</a>)
		: (<Link to={link} key={key} onClick={scrollToTop}>{element}</Link>);
}

export default function Footer() {
	const { t } = useTranslation();
	
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.title}>{t("footer.social")}</h2>

				<div className={styles.social}>
					{social.map((item: FooterItem) => <Item item={item} key={item.key} />)}
				</div>
				
				<div className={styles.groups}>
					{groups.map(({title, data, key}: FooterGroup) => {
						return (
							<div className={styles.group} key={key}>
								<h2 className={styles.title}>{t(title)}</h2>
								{data.map((item: FooterItem) => <Item item={item} key={item.key} />)}
							</div>
						);
					})}
				</div>
				
				<Separator />

				<p className={styles.copyright}>
					{t("footer.made")}

					<span style={{width: ".35rem", display: "inline-block"}}></span>
					<a href="https://simpleicons.org/" target="_blank">{t("footer.flaticon")} SimpleIcons.</a>
				</p>
			</div>
		</div>
	);
}