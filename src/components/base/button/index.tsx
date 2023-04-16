import styles from "./styles.module.scss";

interface ButtonArguments {
	text: string,
	style?: any
}

export default function Button({text, style}: ButtonArguments) {
	return (
		<div className={styles.container} style={style}>
			<span className={styles.label}>{text}</span>
		</div>
	);
}