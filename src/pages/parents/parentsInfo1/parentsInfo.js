import "./parentsInfo1.scss";
import img from "../../../media/2.1.jpg";
import navParents from "../../../components/data/data.json";
import parentsInfo from "../../../components/data/data.json";
import { useParams, useNavigate } from "react-router-dom";
// import { Nav } from "../../../components/navbar/nav";
const ParentsInfo = () => {
	const params = useParams();
	const nav = useNavigate();
	console.log(params.categ);
	return (
		<div className="parentsInfo">
			<button onClick={() => nav(-1)}>{"<"}</button>
			{parentsInfo?.parentsInfo?.map((item, index) =>
				params?.categ === item.id ? (
					<div className="parentsInfo__titles" key={index}>
						{console.log("item.id >>> ", item.img)}
						<h1 className="parentsInfo__titles-title">{item.title}</h1>
						<img src={item.img} alt="" />
						<div>
							<p>{item.description}</p><br />
							<p>{item.description2}</p><br />
							<p>{item.description3}</p><br />
							<p>{item.description4}</p><br />
							<h3>{item.title2}</h3>
							<p>{item.description5}</p>
						</div>
					</div>
				) : null
			)}
		</div>
	);
};

export default ParentsInfo;
