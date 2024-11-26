import { CSSProperties, useMemo } from "react";
import styles from "./button_styles.module.scss"; 
import clsx from "clsx";

export enum ButtonType {
	SOLID,
	OUTLINED
}

export default function Button({
	text,
	style, 
	onPress, 
	icon,
	iconStyle,
	className,
	enabled = true,
	type = ButtonType.SOLID
}: {
	text: string,
	style?: CSSProperties,
	icon?: string,
	className?: string,
	iconStyle?: CSSProperties,
	onPress?: () => void,
	enabled?: boolean,
	type?: ButtonType
}) {
	const typeClass = useMemo(() => {
		switch(type) {
			case ButtonType.SOLID: return styles.typeSolid;
			case ButtonType.OUTLINED: return styles.typeOutlined;
		}
	}, [type]);

	return (
		<div className={clsx(styles.container, typeClass, className, enabled ? styles.enabled : styles.disabled)}
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