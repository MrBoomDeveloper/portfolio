import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage, PrivacyPage, TermsPage, ErrorPage, ProjectPage, Root } from "@routes";
import translation from "@data/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
		{ path: "project/:projectId", element: <ProjectPage /> }
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