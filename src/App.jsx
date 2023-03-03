import "@etc/globalStyles";
import { Header, Footer } from "@components/layouts";
import { Home, Project } from "@pages";

export default function App() {
	return (
		<>
			<Header />
			<Home />
			<Footer />
		</>
	);
}