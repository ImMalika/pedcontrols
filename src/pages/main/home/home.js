import React from "react";
import "./home.scss";
import { Nav } from "../../../components/navbar/nav";
import SliderMain from "../../../components/sliderMain/sliderMain";
import CardsMain from "../../../components/cardsMain/cardsMain";
import InfoUs from "../../../components/infoUs/infoUs";
import { Carousel2 } from "../../../components/infoCarousels/carousel2/carousel2";
import Carousel1 from "../../../components/infoCarousels/carousel1/carousel1";
import Resourses from "../../../components/resourses/resourses";
import Advantages from "../../../components/advantages/advantages";
import Footer from "../../../components/footer/footer";
import navData from "../../../components/data/data.json";
const Home = () => {
	return (
		<div className="home">
			<Nav dataLink={navData.navHome} />
			{console.log("navData.navHome>>", navData.navHome)}
			<SliderMain />
			<div className="cardsMain">
				<h2>Ota-ona va O'smirlar uchun maslahatlar!</h2>
				<CardsMain />
			</div>
			<div className="info1Div">
				<InfoUs />
			</div>
			<div className="homeBG"></div>
			<div className="info2 wrapper">
				<div className="info2__col1">
				<br />
				<br />
				<br />
					<Carousel1 />
				</div>
				{/* <div className="info2__col2">
					<Carousel2 />
					<h3>Modulli oquv dasturlari haqida</h3>
					<p>
						Поможем подтянуть и углубить школьные знания, улучшить оценки,
						повысить интерес к учебе
					</p>
				</div> */}
			</div>
			<Advantages />
			<div className="resoursesDiv">
				<h2>Foydali resurslar</h2>
				<Resourses />
			</div>
			<Footer />
		</div>
	);
};
export { Home };
