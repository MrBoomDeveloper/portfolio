import styles from "./styles.module.scss";

interface SectionArguments {
	fill: boolean,
	children: any
}

export default function Section({children, fill}: SectionArguments) {
	let style: string = styles.container;
	if(fill) style += " " + styles.filled;
	
	return (
		<div className={style}>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}