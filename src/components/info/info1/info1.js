import React from "react";
import "./info1.scss";
import { Link } from "react-router-dom";
import border1 from "../../../media/Satga.png";
import border2 from "../../../media/Satga.png";
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
			<img className="info1__img img1" src="https://assets-global.website-files.com/5e70be0eacdcd587546dda68/5f2288cc7be7e60262df1f70_chemical_colored.svg" alt="" />
			{/* <img className="info1__img img2" src={border2} alt="" /> */}
			{Info1Data.map((item, index) => (
				<div className="info1__div" key={index}>
					<img className="info1__div-img" src={item.img} alt="" />
					<div className="info1__div-texts">
						<p className="info1__div-texts-text">{item.description}</p>
						<Link to="/aboutUs" className="info1__div-texts-btn">
							{item.btnTitle}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default Info1;
