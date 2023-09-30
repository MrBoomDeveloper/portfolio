import { CSSProperties } from "react";
import styles from "./styles.module.scss"; 

export default function Button({
	text,
	style, 
	onPress, 
	icon,
	iconStyle,
	className,
	enabled = true
}: {
	text: string,
	style?: CSSProperties,
	icon?: string,
	className?: string,
	iconStyle?: CSSProperties,
	onPress?: () => void,
	enabled?: boolean
}) {
	return (
		<div className={`${styles.container} ${className} ${enabled ? styles.enabled : styles.disabled}`} 
			style={style} 
			onClick={() => {
				if(!enabled) return;

				onPress?.();
			}}>
				
			<span className={styles.label}>{text}</span>
			{icon && <img src={icon} className={styles.icon} style={iconStyle} />}
		</div>
	);
}