import React from "react";
import "./navMain.scss";
import Logo from "../../media/logo.png";
import NavLinks from "./navLinks";

const NavMain = () => {
	return (
		<div className="navMain">
			<div className="navMain__menu wrapper">
				<img src={Logo} alt="logo" className="navMain__menu-logo" />
				<NavLinks />
			</div>
		</div>
	);
};

export default NavMain;
