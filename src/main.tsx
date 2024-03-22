import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import translation from "@data/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AweryPage from "@routes/project/awery";
import Root from "@routes/root";
import ErrorPage from "@routes/error";
import HomePage from "@routes/home";
import PrivacyPage from "@routes/policy/privacy";
import TermsPage from "@routes/policy/terms";
import AweryAppLoginPage from "@routes/project/awery/app-login";

i18n.use(initReactI18next).init({
	resources: translation,
	lng: navigator.language,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
});

const router = createHashRouter([
	{ path: "/", element: <Root />, errorElement: <ErrorPage />, children: [
		{ path: "/", element: <HomePage /> },
		{ path: "privacy", element: <PrivacyPage /> },
		{ path: "terms", element: <TermsPage /> },
		{ path: "awery", element: <AweryPage /> },
		{ path: "awery/app-login/:ext", element: <AweryAppLoginPage /> },
	] }
]);

function App() {
	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
}

const rootElement = document.querySelector("#root");
if(rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<App />);
}