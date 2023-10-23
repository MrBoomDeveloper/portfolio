import { Link } from "react-router-dom";
import { Button } from "@components/base";
import Root from "../root";
import styles from "./styles.module.scss";

export default function ErrorPage() {
	return (
		<Root>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Page Not Found!</h1>
					<p>Oh no! Something went wrong and we don't know how.</p>
					
					<Link to="/">
						<Button text="Go to home page" style={{fontSize: ".8em", width: "max-content", paddingInline: "1.5rem"}} />
					</Link>
				</div>
			</div>
		</Root>
	);
}