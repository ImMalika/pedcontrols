import React from "react";
import { Nav } from "../navbar/nav";
import Footer from "../footer/footer";
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
