import React from "react";
import "./sliderMain.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Arrows = ({ prevSlide, nextSlide }) => {
	return (
		<div className="arrows">
			<span className="prev" onClick={prevSlide}>
				<FaArrowLeft />
			</span>
			<span className="next" onClick={nextSlide}>
				<FaArrowRight />
			</span>
			<div className="prev-div" onClick={prevSlide}></div>
			<div className="next-div" onClick={nextSlide}></div>
		</div>
	);
};

export default Arrows;
