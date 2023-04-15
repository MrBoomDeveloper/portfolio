import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, PrivacyPage, ErrorPage, ProjectPage, Root } from "@routes";

const router = createBrowserRouter([
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