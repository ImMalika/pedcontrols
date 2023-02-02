import React from "react";
import "./resourses.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Resourses = () => {
	const data = [
		{
			img: "https://www.uzedu.uz/uploads/2021/10/BFjwSXUVJKvUcxglIP2feU2wdVXfW7_O.jpg",
			link: "https://kitob.uz/",
			title: "Kitob.uz",
		},
		{
			img: "https://www.kitob.uz/statics/logo-ozrxtv.png",
			link: "https://uzedu.uz/y3",
			title: "uzedu",
		},
		{
			img: "https://www.uzedu.uz/uploads/2022/05/SC1ESlOWETZZRPIyeQalEuTys5jpMnxK.jpg",
			link: "https://itsm.uz/uz/edu-kids",
			title: "edukids",
		},
		{
			img: "https://i.pinimg.com/originals/62/82/54/628254829d04e22d93e1da811eda18dc.jpg",
			link: "https://educare.uzedu.uz/",
			title: "edu care",
		},
		{
			img: "https://www.uzedu.uz/uploads/2022/04/4FHTwbvpBYgqHjMtUrOImiMLIDJQ1Giv.jpg",
			link: "https://artshop.uzedu.uz/ru",
			title: "art shop",
		},
		{
			img: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/itobuz-logo.png?v=1.3",
			link: "https://itobuz.com/",
			title: "itobuz",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
	const [imageIndex, setImageIndex] = useState(0);
	const settings = {
		infinite: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};
	return (
		<div className="resourses">
			<Slider {...settings}>
				{data.map((item, index) => (
					<div className={index === imageIndex ? "slide active" : "slide"}>
						<img src={item.img} alt={item.img} />
						<a href={item.link} target="_blank" className="link">
							{item.title}
						</a>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Resourses;
