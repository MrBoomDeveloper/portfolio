import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage, PrivacyPage, ErrorPage, ProjectPage, Root } from "@routes";
import translation from "@data/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
	.init({
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
		{ path: "project/:projectId", element: <ProjectPage /> }
	] }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);