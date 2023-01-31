import React from "react";
import "./home.scss";
import { Nav } from "../../../components/navbar/nav";
// import NavMain from "../../../components/navMain/navMain";
import SliderMain from "../../../components/sliderMain/sliderMain";
import CardsMain from "../../../components/cardsMain/cardsMain";
import Info1 from "../../../components/info/info1/info1";
// import Info2 from "../../../components/info/info2/info2";
import Resourses from "../../../components/resourses/resourses";
import Advantages from "../../../components/advantages/advantages";
import Footer from "../../../components/footer/footer";
import { Carousel2 } from "../../../components/info/info2/carousel2/carousel2";
import Carousel1 from "../../../components/info/info2/carousel1/carousel1";
// import { InsideAir } from "../../../components/info/info2/insideAir";

const Home = () => {
	return (
		<div className="home">
			<Nav />
			{/* <NavMain /> */}
			<SliderMain />
			<CardsMain />
			<div className="info1Div">
				<h2>Biz haqimizda</h2>
				<Info1 />
			</div>
			<div className="info2 wrapper">
				<h2>Modulli oquv dasturlari</h2>
				<div className="info2__col1">
					<p>
						Поможем подтянуть и углубить школьные знания, улучшить оценки,
						повысить интерес к учебе
					</p>
					<h3>Online tahdidlaridan himoyalash</h3>
					<Carousel1 />
				</div>
				<div className="info2__col2">
					<Carousel2 />
					<h3>Modulli oquv dasturlari haqida</h3>
<p>Поможем подтянуть и углубить школьные знания, улучшить оценки,
						повысить интерес к учебе</p>
				</div>
			</div>
			<Advantages />
			<Resourses />
			<Footer />
		</div>
	);
};

export { Home };
