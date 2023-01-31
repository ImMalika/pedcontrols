import React from "react";
import "./resourses.scss";
import data from "../data/data.json";

const Resourses = () => {
	return (
		<div className="cards">
			resourses
			{/* {data.main.map((item, index) => (
				<div className="card" key={index}>
					<h2>{item.name}</h2>
					<h5>{item.email}</h5>
					<p>{item.body}</p>
				</div>
			))} */}
		</div>
	);
};

export default Resourses;
