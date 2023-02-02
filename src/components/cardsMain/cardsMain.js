import React from "react";
import "./cardsMain.scss";
import { cardsData } from "./cardsData";

import { Link } from "react-router-dom";
const CardsMain = () => {
	return (
		<div className="cards">
			{cardsData.map((item, index) => (
				<div className="cards__card" key={index}>
					<img src={item.img} alt="" />
					<Link className="link" to={item.link}>
						{item.title}
					</Link>
				</div>
			))}
		</div>
	);
};

export default CardsMain;
