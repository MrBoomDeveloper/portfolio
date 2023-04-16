import styles from "./styles.module.scss";

export default function Button({text, style}) {
	return (
		<div className={styles.container} style={style}>
			<span className={styles.label}>{text}</span>
		</div>
	);
}