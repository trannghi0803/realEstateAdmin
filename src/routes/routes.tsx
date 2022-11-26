import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "./HomeRoutes";

export default function xRoutes() {
	const ScrollToTop = ({ history, location }: any) => {
		const dontScrollIntoViewOnPaths = ["/this/that"];
		useEffect(() => {
			window.scrollTo(0,0);
			// console.log('window')
			// if (history.action === "POP") {
			// 	return;
			// }

			// let { hash, pathname } = location;
			// if (hash) {
			// 	let element = document.querySelector(hash);
			// 	if (element) {
			// 		element.scrollIntoView({ block: "start", behavior: "smooth" });
			// 	}
			// } else if (!dontScrollIntoViewOnPaths.includes(pathname)) {
			// 	window.scrollTo(0, 0);
			// }
		}, [location.pathname]);

		return null;
	};
	return (
		<BrowserRouter>
			<Route component={ScrollToTop} />
			<HomeRoutes />
			<AuthRoutes />
			<AdminRoutes />
		</BrowserRouter>
	);
}
