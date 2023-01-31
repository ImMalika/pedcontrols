import React from "react";
import "./info1.scss";
import img1 from "../../../media/img1.jpg";
import img5 from "../../../media/img5.jpg";
const Info1Data = [
	{
		img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.lorem10 sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.lorem10",
		btnTitle: "davomi...",
	},
	{
		img: "https://www.educationcorner.com/images/featured-importance-education.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.",
		btnTitle: "davomi...",
	},
];
const Info1 = () => {
	return (
		<div className="info1 wrapper">
			{Info1Data.map((item, index) => (
				<div className="info1__div" key={index}>
					<img className="info1__div-img" src={item.img} alt="" />
					<div className="info1__div-texts">
						<p className="info1__div-texts-text">{item.description}</p>
						<button className="info1__div-texts-btn">{item.btnTitle}</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Info1;
