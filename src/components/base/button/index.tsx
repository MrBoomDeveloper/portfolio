import { CSSProperties } from "react";
import styles from "./styles.module.scss"; 
import clsx from "clsx";

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
		<div className={clsx(styles.container, className, enabled ? styles.enabled : styles.disabled)}
			style={style} 
			onClick={() => {
				if(!enabled) return;
				onPress?.();
			}}>
			
			<div className={styles.content}>
				<span className={styles.label}>{text}</span>

				{icon && (
					<img className={styles.icon} style={iconStyle}
						src={icon} alt={text} title={text} />
				)}
			</div>
		</div>
	);
}