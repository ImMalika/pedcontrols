import React from "react";
import "./sliderMain.scss";

const Arrows = ({ prevSlide, nextSlide }) => {
	return (
		<div className="arrows">
			<span className="prev" onClick={prevSlide}>
				{"<"}
			</span>
			<span className="next" onClick={nextSlide}>
				{">"}
			</span>
			<div className="prev-div" onClick={prevSlide}></div>
			<div className="next-div" onClick={nextSlide}></div>
		</div>
	);
};

export default Arrows;
