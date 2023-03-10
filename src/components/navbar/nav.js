import React from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo.png";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";

import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, message } from "antd";
const onClick = ({ key }) => {
	message.info(`Click on item ${key}`);
};

const Nav = ({ dataLink }) => {
	// console.log("items", dataLink);
	const [navSize, setnavSize] = useState("100px");
	const listenScrollEvent = () => {
		window.scrollY > 150 ? setnavSize("70px") : setnavSize("90px");
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
				height: navSize,
				transition: "all 0.8s",
			}}
		>
			<Link className="nav__logo" to="/">
				<img className="nav__logo-img" src={navLogo} alt="nav logo" />
				<h4>PEDCONTROLS.UZ</h4>
			</Link>
			<div className="mainDropDown nav__links">
				{dataLink.map((item, index) => (
					<div key={index} className="nav__links-div">
						<NavLink className="nav__links-div-link" to={`${item.link}`}>
							<div className="nav__links-div-line top"></div>
							<p>
								{item.title}{" "}
								{item.dropDown !== undefined ? <DownOutlined /> : null}
							</p>
							<div className="nav__links-div-line bottom"></div>
						</NavLink>
						<div
							className={
								item.dropDown !== undefined
									? "nav__links-div-dropDown"
									: "nav__links-div-dropDown dropDownNone"
							}
						>
							{item.dropDown !== undefined
								? item.dropDown?.map((item, index) => (
										<Link to={item.link} key={index}>
											{console.log("item", item.link)}
											{item.title}
										</Link>
								  ))
								: null}
						</div>
					</div>
				))}
			</div>
			<div className="nav__mobile"></div>
		</nav>
	);
};
export { Nav };
