import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function ButtonExpand({
	onClick, 
	size, 
	className,
	isActive
}: {
	onClick: () => void,
	className?: string,
	size: number | string,
	isActive?: boolean
}) {
	return (
		<div className={clsx(styles.container, isActive && styles.containerActive, className)}
			style={{height: size}} 
			onClick={() => onClick?.()}>

			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</div>
	);
}