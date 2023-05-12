import React from "react";
import "./carousel1.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img1 from "../../../media/youngsmedia/carouselimg1.png";
import Img2 from "../../../media/youngsmedia/carouselimg2.png";
import Img3 from "../../../media/youngsmedia/internet.jpg"
import Img4 from "../../../media/youngsmedia/smoking2.jpg";
import Img5 from "../../../media/youngsmedia/lifestyle7.jpg";
import Img6 from "../../../media/parentsmedia/advices4.jpg";
import Img7 from "../../../media/parentsmedia/psychology10.jpg";



const Carousel1 = () => {
	const data = [
		{
			img: Img2,
			title:"img 1",
			link: "/parents/method2",

		},
		{
			img: Img7,
			title: "img 2",
			link: "/parents/psychologist's-advice",
		},
		{
			img: Img5,
			title:"img 1",
			link: "/younges/lifestyle",
		},
		{
			img: Img4,
			title: "img 4",
			link: "/youngs/bad-habits/smoking",
		},
		{
			img: Img6,
			title: "img 4",
			link: "/parents/useful-advices",
		},
		{
			img: Img1,
			title: "img 4",
			link: "/parents/method1",
		},
		{
			img: Img3,
			title: "img 4",
			link: "/youngs/threats/internet-addiction",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<FaArrowCircleRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowCircleLeft />
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
		<div className="carousel1">
			<Slider {...settings}>
				{data.map((item, index) => (
					<div
						key={index}
						className={index === imageIndex ? "slide active" : "slide"}
					>
						<img src={item.img} alt={item.title} />
						<Link to={item.link} className="link">
							{item.title}
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel1;
