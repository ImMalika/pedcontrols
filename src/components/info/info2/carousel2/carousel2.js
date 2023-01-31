import React from "react";
import "./carousel2.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const Carousel2 = () => {
	return (
		<Carousel className="carousel2">
			<div>
				<img
					src="https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg"
					alt=""
				/>
				<Link to="/modul" className="link">Modulli dastur 1</Link>
			</div>
			<div>
				<img
					src="https://www.processmaker.com/wp-content/uploads/2019/12/464-scaled.jpg"
					alt=""
				/>
				<Link to="/modul" className="link">Modulli dastur 2</Link>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg"
					alt=""
				/>
				<Link to="/modul" className="link">Modulli dastur 3</Link>
			</div>
		</Carousel>
	);
};
export { Carousel2 };
