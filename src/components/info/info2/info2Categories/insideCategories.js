import React from "react";
import { Link } from "react-router-dom";
import serviceCardImg1 from "../../../media/Air-Freight_.jpg";
import serviceCardImg2 from "../../../media/news.jpg";
import serviceCardImg3 from "../../../media/shipping-rates-are-finally-falling-1428282157-standard-1536x1536.jpg";
import serviceCardImg4 from "../../../media/customs-clearance.png";
// import { t } from "i18next";
const InsideCategories = ({}) => {
	const cardsData = [
		{
			img: serviceCardImg1,
			title: "Sumbady is true",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium?",
			btnTitle: "ko'rish",
			link: "/services/airFreight",
			key: "01",
		},
		{
			img: serviceCardImg2,
			title: "Sumbady is true",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium?",
			btnTitle: "ko'rish",
			link: "/services/roadFreight",
			key: "02",
		},
		{
			img: serviceCardImg3,
			title: "Sumbady is true",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium?",
			btnTitle: "ko'rish",
			link: "/services/shipFreight",
			key: "03",
		},
		{
			img: serviceCardImg4,
			title: "Sumbady is true",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium?",
			btnTitle: "ko'rish",
			link: "/services/customs",
			key: "04",
		},
	];
	return (
		<>
			{cardsData.map((item, index) => (
				<Link to={item.link} className="link" key={index}>
					<div className="inside__elements-col1-categories" key={index}>
						<img src={item.img} alt="inside img" />
						<h4>{item.title}</h4>
					</div>
				</Link>
			))}
		</>
	);
};

export default InsideCategories;
