import React from "react";
import "./sliderMain.scss";

const SliderBg = ({ activeIndex, sliderData }) => {
	return (
		<section>
			{sliderData.map((item, index) => (
				<div
					key={index}
					className={index === activeIndex ? "slides active" : "inactive "}
				>
					<img className="slide-img" src={item.url} alt="" />
				</div>
			))}
		</section>
	);
};

export default SliderBg;