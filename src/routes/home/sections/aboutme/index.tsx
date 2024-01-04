import { memo } from "react";
import styles from "./styles.module.scss";

interface AboutMeProps {
	title: string,
	description: string,
	banner: string,
	invert?: boolean
}

function AboutMe({title, description, banner, invert}: AboutMeProps) {
	return (
		<div className={styles.section + ` ${invert ? styles.invert : ""}`}>
			<div className={styles.info}>
				<h1 className={styles.infoTitle}>{title}</h1>
				<p  className={styles.infoDescription}>{description}</p>
			</div>

			<div className={styles.banner}>
				<img src={banner} />
			</div>
		</div>
	);
}

export default memo(AboutMe);