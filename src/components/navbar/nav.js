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
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const [navSize, setnavSize] = useState("13vh");
	const listenScrollEvent = () => {
		window.scrollY > 150 ? setnavSize("9vh") : setnavSize("12vh");
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
			<Link className="nav__logo" to="/" onClick={scrollToTop}>
				<img className="nav__logo-img" src={navLogo} alt="nav logo" />
				<h4>PEDCONTROLS.UZ</h4>
			</Link>
			<div className="mainDropDown nav__links">
				{dataLink.map((item, index) => (
					<div key={index} className="nav__links-div" onClick={scrollToTop}>
						<NavLink
							className="nav__links-div-link"
							to={`${item.link}`}
							onClick={scrollToTop}
						>
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
							onClick={scrollToTop}
						>
							{item.dropDown !== undefined
								? item.dropDown?.map((item, index) => (
										<div
											key={index}
											className={"nav__links-div-dropDown-drLink"}
											onClick={scrollToTop}
										>
											{/* {console.log("item-InDropDown>>>", item.inDropDown)} */}
											<Link to={item.link} onClick={scrollToTop}>
												{item.title}{" "}
												{item.inDropDown !== undefined ? (
													<DownOutlined />
												) : null}
											</Link>
											<div
												className={
													item.inDropDown !== undefined
														? "nav__links-div-dropDown-drLink-div"
														: "nav__links-div-dropDown-drLink-div drLinksNone"
												}
												onClick={scrollToTop}
											>
												{item.inDropDown !== undefined
													? item.inDropDown?.map((item, index) => (
															<Link
																to={item.link}
																key={index}
																onClick={scrollToTop}
															>
																{/* {console.log("item --> ", item.link)} */}
																{item.title}
															</Link>
													  ))
													: null}
											</div>
										</div>
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
