import React from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo.png";
import "./nav.scss";
import { Link } from "react-router-dom";
const Nav = ({ dataLink, onClick }) => {
	const [navSize, setnavSize] = useState("100px");
	const [navColorBg, setnavColorBg] = useState("#fff");
	const [navColor, setnavColor] = useState("#2447A7");
	const [navTextShadow, setnavTextShadow] = useState(
		"1px 1px 10px rgba(255, 255, 255, 0.545)"
	);
	const listenScrollEvent = () => {
		// window.scrollY > 150 ? setnavColorBg("#fff") : setnavColorBg("#fff");
		window.scrollY > 150 ? setnavSize("70px") : setnavSize("90px");
		window.scrollY > 150 ? setnavColor("#fff") : setnavColor("#2447A7");
		window.scrollY > 150
			? setnavTextShadow("none")
			: setnavTextShadow("1px 1px 10px rgba(255, 255, 255, 0.545)");
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	return (
		<nav
			className="nav"
			style={{
				// backgroundColor: navColorBg,
				height: navSize,
				transition: "all 0.8s",
			}}
		>
			<Link className="nav__logo" to="/">
				<img className="nav__logo-img" src={navLogo} alt="nav logo" />
				<h4>PEDCONTROLS.UZ</h4>
			</Link>
			<div
				className="nav__links"
				style={
					{
						// color: navColor,
						// textShadow: navTextShadow,
					}
				}
			>
				{dataLink.map((item, index) => (
					<div className="nav__links-div" key={index}>
						<div className="nav__links-div-line top"></div>
						<Link className="nav__links-div-link" to={item.link}>
							{item.title}
						</Link>
						<div className="nav__links-div-line bottom"></div>
					</div>
				))}
			</div>
			<div className="nav__mobile">

			</div>
		</nav>
	);
};
export { Nav };
