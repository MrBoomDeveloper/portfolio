import { CSSProperties } from "react";
import styles from "./styles.module.scss";

interface ButtonArguments {
	text: string,
	style?: CSSProperties,
	icon?: string,
	iconStyle?: CSSProperties,
	onPress?: () => void
}

export default function Button({text, style, onPress, icon, iconStyle}: ButtonArguments) {
	return (
		<div className={styles.container} style={style} onClick={onPress}>
			<span className={styles.label}>{text}</span>
			{icon && <img src={icon} className={styles.icon} style={iconStyle} />}
		</div>
	);
}