import React from "react";
import SliderContent from "./sliderContent";
import "./sliderMain.scss";
import { sliderData } from "./sliderData";
import Arrows from "./arrows";
import { useState, useEffect } from "react";
import Dots from "./dots";
import SliderBg from "./sliderBg";
const len = sliderData.length - 1;
const SliderMain = ({ props }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div className="sliderMain slider-container">
			<SliderContent activeIndex={activeIndex} sliderData={sliderData} />
			<Arrows
				prevSlide={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlide={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			/>
			<Dots
				activeIndex={activeIndex}
				sliderData={sliderData}
				onClick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
			<SliderBg  activeIndex={activeIndex} sliderData={sliderData} />
		</div>
	);
};

export default SliderMain;

// import HeroSlider, { Slide } from "hero-slider";
// const SliderMain = () => {
// const img1 =
// 	"https://images.unsplash.com/photo-1470608756445-2c9906b0680f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlnJTIwc2l6ZXxlbnwwfHwwfHw%3D&w=1000&q=80";
// const img2 = "https://cdn.wallpapersafari.com/86/9/4cg1Qw.jpg";
// const img3 =
// 	"https://www.worldatlas.com/r/w1200/upload/ea/6a/8a/shutterstock-291347969.jpg";
// const img4 =
// 	"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sunset_%282%29.jpg/1024px-Sunset_%282%29.jpg";
// 	return (
// 		<HeroSlider
// 			slidingAnimation="left_to_right"
// 			orientation="horizontal"
// 			initialSlide={1}
// 			onBeforeChange={
// 				(previousSlide, nextSlide) => (previousSlide, nextSlide)
// 				// console.log("on before change", previousSlide, nextSlide)
// 			}
// 			onChange={(nextSlide) => nextSlide}
// 			onAfterChange={(nextSlide) => nextSlide}
// 			style={{ backgroundColor: "rgba(0, 0, 0, 0.13)" }}
// 			settings={{
// 				slidingDuration: 250,
// 				slidingDelay: 100,
// 				shouldAutoplay: true,
// 				shouldDisplayButtons: true,
// 				autoplayDuration: 5000,
// 				height: "100vh",
// 			}}
// 		>
// 			<Slide
// 				background={{
// 					backgroundImage: "https://cdn.wallpapersafari.com/86/9/4cg1Qw.jpg",
// 					backgroundAttachment: "fixed",
// 					title: "bla bla",
// 					description: "bla bla",
// 				}}
// 				text={"bla bla"}
// 			/>
// 			<Slide
// 				background={{
// 					backgroundImage: img2,
// 					backgroundAttachment: "fixed",
// 				}}
// 			/>
// 			{"wegsrbr "}
// 			<Slide
// 				background={{
// 					backgroundImage: img3,
// 					backgroundAttachment: "fixed",
// 				}}
// 			/>
// 			{"xcvbv "}
// 			<Slide
// 				background={{
// 					backgroundImage: img4,
// 					backgroundAttachment: "fixed",
// 				}}
// 			/>
// 			{console.log("bla bla")}
// 		</HeroSlider>
// 	);
// };

// export default SliderMain;
