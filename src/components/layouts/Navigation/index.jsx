import { useMemo } from "react";
import styles from "./styles.module";

export default function Navigation({isActive}) {
	const style = useMemo(() => {
		return styles.holder + " " + (isActive 
			? styles.active 
			: styles.inactive);
	}, [isActive]);
	
	return (
		<div className={style}>
			<h2>Navigation</h2>
		</div>
	);
}