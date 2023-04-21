import React from "react";
import "./youngsInfo1.scss";
import img from "../../../media/2.1.jpg";
import navParents from "../../../components/data/data.json";
import youngsInfo from "../../../components/data/data.json";
// import youngsInfo1 from "../../../components/data/data";
import { useParams, useNavigate } from "react-router-dom";
// import { Nav } from "../../../components/navbar/nav";
const YoungsInfo = () => {
	const params = useParams();
	const nav = useNavigate();
	console.log(params.child);
	return (
		<div className="parentsInfo">
			{youngsInfo?.youngsInfo?.map((item, index) => console.log(item))}
			{console.log("123")}
			<button onClick={() => nav(-1)}>{"<"}</button>
			{youngsInfo?.youngsInfo?.map((item, index) =>
				params?.child === item.id ? (
					<div className="parentsInfo__titles" key={index}>
						<h1 className="parentsInfo__titles-title">{item.title}</h1>
						<h2 className="parentsInfo__titles-titles">{item.alcohol}</h2>
						<div>
							<p>{item.alcoholdesc1}</p>
							<p>{item.alcoholdesc2}</p>
							<p>{item.alcoholdesc3}</p>
							<p>{item.alcoholdesc4}</p>
						</div>
						
					</div>
				) : null
			)}
		</div>
	);
};

export default YoungsInfo;
