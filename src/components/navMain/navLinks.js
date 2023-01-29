import React from "react";
import {Link} from "react-router-dom";

const NavLinks = () => {
	return (
		<div className="navMain__menu-links">
			<Link to={""} className="navMain__menu-links-link">
				Biz haqimizda
			</Link>
			<Link to={""} className="navMain__menu-links-link">
				Ota-onalar uchun
			</Link>
			<Link to={""} className="navMain__menu-links-link">
				O'smirlar uchun
			</Link>
			<Link to={""} className="navMain__menu-links-link">
				Mo'dulli o'quv dastur
			</Link>
		</div>
	);
};

export default NavLinks;
