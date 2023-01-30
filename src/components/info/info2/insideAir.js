import React from "react";
import "./insidePages.scss";
import "../../scss/main.scss";
// import { Nav } from "../../components/navbar/nav";
// import NavbarLinks from "../../components/navbar2/NavbarLinks";
import Footer from "../../components/footer/footer";
// import ShowBg from "../../components/showBg/showBg";
// import bgImg from "../../media/air_freight.jpg";
import img1 from "../../media/Air-Freight_.jpg";
import InsideCategories from "./insideCategories/insideCategories";

const InsideAir = () => {

	return (
			<div className="main inside">
				<h2 className="page__title">
					 <span>bla bla</span>
				</h2>
				<div className="inside__elements wrapper">
					<div className="inside__elements-col1">
						<h3>sava</h3>
						<InsideCategories />
					</div>
					<div className="inside__elements-col2">
						<div className="inside__elements-col2-elements">
							<img src={img1} alt="inside img" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat nihil magnam. Rem dolore quas eligendi dolor reprehenderit voluptas a!
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
	);
};
export { InsideAir };
