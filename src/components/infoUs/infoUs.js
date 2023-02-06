import React from "react";
import "./infoUs.scss";
import { Link } from "react-router-dom";
import infoUsBG from "../../media/infoUsBG.svg";
import exclamation from "../../media/exclamation.png";

const Info1Data = [
	{
		img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.lorem10 sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.lorem10",
		btnTitle: "davomi...",
	},
	{
		img: "https://www.educationcorner.com/images/featured-importance-education.png",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint vitae sit sapiente pariatur explicabo, velit enim voluptatibus libero.",
		btnTitle: "davomi...",
	},
];
const InfoUs = () => {
	return (
		<div className="info1 wrapper">
			<img className="info1__img img1" src={infoUsBG} alt="" />
			<div className="info1__pedTitlesDiv">
				<h2>Pedcontrols.uz nima?</h2>
				<div className="info1__pedTitlesDiv-Texts">
					<img
						src={exclamation}
						alt=""
className="info1__pedTitlesDiv-Texts-Logo"
					/>
					<p>
						<b>Pedcontrols.uz</b> - xalqaro standartlarga javob beruvchi ilg‘or
						raqamli ta’lim texnologiyasi bo‘lib, maktab o‘quvchilari uchun
						sifatli uzluksiz masofaviy ta’lim taqdim etilishini ta’minlaydi.
						Platformada o‘qituvchi va ota-onalar uchun ham o‘quvchilarning
						o‘zlashtirish darajasini nazorat qilib borish, mavzular mazmuni
						bilan tanishish singari keng imkoniyatlar taqdim etiladi.
					</p>
				</div>
			</div>
			{/* <h2>Biz haqimizda</h2> */}
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

export default InfoUs;
