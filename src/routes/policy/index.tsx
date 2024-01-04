import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

interface PageArguments {
	data: Policy
}

interface Policy {
	title: string,
	lastUpdated: string,
	data: string[]
}

export default function PolicyPage({data: {data, title, lastUpdated}}: PageArguments) {
	const { t } = useTranslation();
	return (
		<div className={styles.screen}>
			<div className={styles.content}>
				<div className={styles.header}>
					<h1 className={styles.title}>{t(title)}</h1>
					<span className={styles.date}>{t("policy.updated")}: <br />{lastUpdated}</span>
				</div>
				<div className={styles.fields}>
					{data.map((item, index) => {
						return (
							<p className={styles.field} key={index}>
								<Dot />
								{t(item)}
							</p>
						);
					})}
					
					<p style={{marginTop: "1rem"}} className={styles.field}>{t("policy.email")}:
						<a href="mailto:contact@mrboomdev.ru" target="_blank"> contact@mrboomdev.ru</a>
					</p>
				</div>
			</div>
		</div>
	);
}

function Dot() {
	return (
		<span className={styles.dot}>•</span>
	)
}