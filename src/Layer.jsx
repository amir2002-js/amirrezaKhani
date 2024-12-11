import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function Layer() {

	const param = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0);
	},[param.pathname])

	return (
		<>
			<div className="container max-w-310">
				<Navbar />
			</div>
            <Outlet />
            <Footer />
		</>
	);
}