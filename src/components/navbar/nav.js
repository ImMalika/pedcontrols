import React from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo.png";
import "./nav.scss";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

const Nav = ({ onClick }) => {
	const [navSize, setnavSize] = useState("100px");
	const [navColorBg, setnavColorBg] = useState("#fff");
	const [navColor, setnavColor] = useState("#2447A7");
	const [navTextShadow, setnavTextShadow] = useState(
		"1px 1px 10px rgba(255, 255, 255, 0.545)"
	);
	const listenScrollEvent = () => {
		window.scrollY > 150 ? setnavColorBg("#181a1be5") : setnavColorBg("#fff");
		window.scrollY > 150 ? setnavSize("80px") : setnavSize("110px");
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
				backgroundColor: navColorBg,
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
				style={{
					color: navColor,
					textShadow: navTextShadow,
				}}
			>
				<div className="nav__links-div">
					<div className="nav__links-div-line top"></div>
					<Link className="nav__links-div-link" to="/">
						Biz haqimizda
					</Link>
					<div className="nav__links-div-line bottom"></div>
				</div>
				<div className="nav__links-div">
					<div className="nav__links-div-line top"></div>
					<Link className="nav__links-div-link" to="/">
						Ota-onalar uchun
					</Link>
					<div className="nav__links-div-line bottom"></div>
				</div>
				<div className="nav__links-div">
					<div className="nav__links-div-line top"></div>
					<Link className="nav__links-div-link" to="/">
						O'smirlar uchun
					</Link>
					<div className="nav__links-div-line bottom"></div>
				</div>
				<div className="nav__links-div last">
					<div className="nav__links-div-line top"></div>
					<Link className="nav__links-div-link" to="/">
						Modulli o'quv dasturlar
					</Link>
					<div className="nav__links-div-line bottom"></div>
				</div>
			</div>
			<div className="nav__mobile">
				<div className="nav__mobile-elements">
					<p>
						<a
							href="tel:+998 93 543 38 11"
							style={{
								color: navColor,
							}}
						>
							<i className="fa-solid fa-phone"></i>
						</a>
					</p>
					<p>
						<a
							href="mail:cargostreamuz@gmail.com"
							style={{
								color: navColor,
							}}
						>
							<i className="fa-solid fa-envelope"></i>
						</a>
					</p>
					<p
						style={{
							color: navColor,
						}}
					>
						<label htmlFor="navLinks__menu">
							<i className="fa-solid fa-bars-staggered"></i>
						</label>
					</p>
				</div>
			</div>
		</nav>
	);
};
export { Nav };
