import { Link } from "react-router-dom";
import { groups, social } from "@data/footer.json";
import styles from "./styles.module.scss";

interface FooterGroup {
	title: string,
	data: FooterItem[]
}

interface FooterItem {
	title: string,
	link: string,
	external?: boolean
}

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.groups}>
					{groups.map(({title, data}: FooterGroup) => {
						return (
							<div className={styles.group}>
								<h2>{title}</h2>
								{data.map(({title, external, link}: FooterItem) => {
									const text = <p>{title}</p>;
									
									if(!external) {
										return <Link to={link} className={styles.link}>{text}</Link>;
									} else {
										return <a href={link} target="_blank" className={styles.link}>{text}</a>;
									}
								})}
							</div>
						);
					})}
				</div>
				
				<h2>Social</h2>
				<div className={styles.social}>
					{social.map(({link, title}: FooterItem) => {
						return (
							<a href={link} target="_blank">
								<p>{title}</p>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}