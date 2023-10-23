import { CSSProperties, memo } from "react"

function Separator({
	horizontal = true,
	color = "rgba(250, 250, 250, .25)",
	className,
	style
}: {
	horizontal?: boolean,
	color?: string,
	style?: CSSProperties,
	className?: string
}) {
	return <div className={className} style={{
		backgroundColor: color,
		width: horizontal ? "100%" : "1px",
		height: horizontal ? "1px" : "100%",
		...style
	}} />
}

export default memo(Separator);