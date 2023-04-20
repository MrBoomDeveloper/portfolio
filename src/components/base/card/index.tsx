import styles from "./styles.module.scss";

interface CardArguments {
	title: string,
	icon: string
}

export default function Card({title, icon}: CardArguments) {
	return (
		<div className={styles.container}>
			<img className={styles.icon} src={icon} title={title} alt={title} />
			<span className={styles.text}>{title}</span>
		</div>
	);
}