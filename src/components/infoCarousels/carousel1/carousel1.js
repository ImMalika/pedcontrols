import React from "react";
import "./carousel1.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../../media/youngsmedia/badsites1.jpg"
const Carousel1 = () => {
	const data = [
		{
			img: img1,
			title: "img 1",
			link: "/study",
		},
		{
			img: "https://www.educationperfect.com/wp-content/uploads/2022/11/Generic_Happyhighschoolgirlusinglaptopinclassroom_1500px.webp",
			title: "img 2",
			link: "/study",
		},
		{
			img: "https://alis.alberta.ca/media/2149/students-in-class.jpg?anchor=center&mode=crop&width=606&height=440&rnd=131868559330000000",
			title: "img 3",
			link: "/study",
		},
		{
			img: "https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749",
			title: "img 4",
			link: "/study",
		},
		{
			img: "https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749",
			title: "img 4",
			link: "/study",
		},
		{
			img: "https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749",
			title: "img 4",
			link: "/study",
		},
		{
			img: "https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749",
			title: "img 4",
			link: "/study",
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
						<img src={item.img} alt={item.img} />
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
