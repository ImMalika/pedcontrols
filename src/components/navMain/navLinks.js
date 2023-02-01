import React from "react";
import { NavLink} from "react-router-dom";

const NavLinks = () => {
	return (
		<div className="navMain__menu-links">
			<NavLink to={""} className="navMain__menu-links-link">
				Biz haqimizda
			</NavLink>
			<NavLink to={""} className="navMain__menu-links-link">
				Ota-onalar uchun
			</NavLink>
			<NavLink to={""} className="navMain__menu-links-link">
				O'smirlar uchun
			</NavLink>
			<NavLink to={""} className="navMain__menu-links-link">
				Mo'dulli o'quv dastur
			</NavLink>
		</div>
	);
};

export default NavLinks;
