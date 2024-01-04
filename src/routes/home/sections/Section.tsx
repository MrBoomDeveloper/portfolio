import styles from "./SectionStyles.module.scss";

interface SectionArguments {
	fill?: boolean,
	children: any,
	style?: any
}

export default function Section({children, fill, style}: SectionArguments) {
	let className: string = styles.container;
	if(fill) className += " " + styles.filled;
	
	return (
		<div className={className} style={style}>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}