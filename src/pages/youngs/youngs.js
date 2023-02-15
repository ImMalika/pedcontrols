import React from "react";
import "./youngs.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import mainImg from "../../media/myimg2.jpg";
import { Nav } from "../../components/navbar/nav";
import navYoungs from "../../components/data/data.json";
import { Outlet } from "react-router-dom";

const Youngs = () => {
	return (
		<div>
			<Nav dataLink={navYoungs.navYoungs} />
			<Outlet />
			<h1 className="aboutTitle">O'smirlar uchun maslahatlar</h1>
			<div className="aboutUs__wrapper">
				<div className="aboutUs__wrapper-img">
					<img src={mainImg} alt="media" />
				</div>
				<div className="aboutUs__wrapper-info">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Reprehenderit dolor ad nostrum voluptatum quis nam assumenda, amet
						qui fugiat ducimus, eos eveniet excepturi reiciendis delectus
						voluptas sapiente, facere debitis. Esse minus eligendi, deserunt at
						amet optio atque asperiores. Ut, ad. Similique quas accusantium,
						vitae et reiciendis nostrum ea atque laboriosam id voluptatum ipsum,
						cupiditate, deserunt iure neque eos commodi! Magnam et, quas
						doloribus veniam quos aspernatur. Explicabo quo at ipsam.{" "}
					</p>
				</div>
				<p>
					Consectetur maiores minima fugiat vel eligendi ullam et beatae sit
					illum, pariatur praesentium maxime, quia fugit odio sint optio,
					commodi minus perspiciatis reiciendis eaque impedit? Officiis pariatur
					eum possimus exercitationem voluptates sequi in iste iusto, magni et
					adipisci qui maxime omnis nesciunt laboriosam dignissimos nulla natus
					aut fuga ex necessitatibus. Ducimus asperiores quaerat, aperiam
					pariatur provident natus eaque sit minima expedita alias ab
					consectetur quo magni amet dolorem autem, ipsum dicta voluptate illum
					debitis repellendus adipisci? Voluptatem deleniti nobis adipisci sed
					officia iste quidem similique architecto placeat.
				</p>
			</div>
			<Link to="/">Home</Link>
			<Footer />
		</div>
	);
};

export { Youngs };
