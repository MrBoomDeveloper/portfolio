import { useState } from "react";
import styles from "./styles.module.scss";

interface ButtonExpandArguments {
	onToggle: (isActive: boolean) => void,
	size: number
}

export default function ButtonExpand({onToggle, size}: ButtonExpandArguments) {
	const [isActive, setActive] = useState(false);
	
	const onClick = () => {
		onToggle(!isActive);
		setActive(!isActive);
	}
	
	return (
		<div className={`${styles.container} ${isActive && styles.containerActive}`} style={{height: size}} onClick={onClick}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</div>
	);
}