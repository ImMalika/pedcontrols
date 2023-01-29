import React from "react";
import "./sliderMain.scss";

const SliderContent = ({ activeIndex, sliderData }) => {
	return (
		<section>
			{sliderData.map((item, index) => (
				<div
					key={index}
					className={index === activeIndex ? "slides active" : "inactive "}
				>
					<img className="slide-img" src={item.url} alt="" />
					<h2 className="slide-title">{item.title}</h2>
					<h3 className="slide-text">{item.description}</h3>
				</div>
			))}
		</section>
	);
};

export default SliderContent;