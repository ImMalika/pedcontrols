import React from "react";
import "./aboutUs";
import { Link } from "react-router-dom";
// import NavMain from "../../../components/navMain/navMain";
import Footer from "../../../components/footer/footer";
import mainImg from "../../../media/myimg1.jpg";

const AboutUs = () => {
	return (
		<div>
			
			<div className="aboutUs__wrapper">
				<div className="aboutUs__wrapper-img">
					<img src={mainImg} alt="media" />
				</div>
				<div className="aboutUs__wrapper-info">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit dolor ad nostrum voluptatum quis nam assumenda, amet qui fugiat ducimus, eos eveniet excepturi reiciendis delectus voluptas sapiente, facere debitis. Esse minus eligendi, deserunt at amet optio atque asperiores. Ut, ad. Similique quas accusantium, vitae et reiciendis nostrum ea atque laboriosam id voluptatum ipsum, cupiditate, deserunt iure neque eos commodi! Magnam et, quas doloribus veniam quos aspernatur. Explicabo quo at ipsam. Harum quod numquam similique dolore minus amet, fuga magni eum exercitationem soluta quasi omnis iusto eos aut, ea labore a voluptates voluptatibus. Amet culpa iusto laudantium hic suscipit ullam ipsam quisquam eaque molestiae voluptates ipsa quod quo, beatae, vel voluptatem deleniti. Porro, perferendis! Consectetur maiores minima fugiat vel eligendi ullam et beatae sit illum, pariatur praesentium maxime, quia fugit odio sint optio, commodi minus perspiciatis reiciendis eaque impedit? Officiis pariatur eum possimus exercitationem voluptates sequi in iste iusto, magni et adipisci qui maxime omnis nesciunt laboriosam dignissimos nulla natus aut fuga ex necessitatibus. Ducimus asperiores quaerat, aperiam pariatur provident natus eaque sit minima expedita alias ab consectetur quo magni amet dolorem autem, ipsum dicta voluptate illum debitis repellendus adipisci? Voluptatem deleniti nobis adipisci sed officia iste quidem similique architecto placeat.</p>
				</div>
			</div>
			<Link to="/">Home</Link>
			<Footer />
		</div>
	);
};

export { AboutUs };
