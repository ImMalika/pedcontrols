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
						<p><b>{item.question1}</b>{item.description}</p><br />
						<p><b>{item.answer1}</b>{item.answerdesc1}</p><br />
						<p><b>{item.question2}</b>{item.description2}</p><br />
						<p><b>{item.answer2}</b>{item.answerdesc2}</p><br />
						<p><b>{item.question3}</b>{item.description3}</p><br />
						<p><b>{item.answer3}</b>{item.answerdesc3}</p>
						<p>{item.answerdesc3a}</p>
						<p>{item.answerdesc3b}</p>
						<p>{item.answerdesc3c}</p>
						<p>{item.answerdesc3d}</p>
						<br />
						<p><b>{item.question4}</b>{item.description4}</p><br />
						<p><b>{item.answer4}</b>{item.answerdesc4}</p><br />
						<p><b>{item.question5}</b>{item.description5}</p><br />
						<p><b>{item.answer5}</b>{item.answerdesc5}</p><br />
						<p><b>{item.question6}</b>{item.description6}</p><br />
						<p><b>{item.answer6}</b>{item.answerdesc6}</p><br />
						<p><b>{item.question7}</b>{item.description7}</p>
						<p>{item.description7a}</p>
						<br />
						<p><b>{item.answer7}</b>{item.answerdesc7}</p>
						<br />
						<p><b>{item.question8}</b>{item.description8}</p>
						<p>{item.description8a}</p><br />
						<p><b>{item.answer8}</b>{item.answerdesc8}</p>
						<p>{item.answerdesc8}</p><br />
						<p><b>{item.question9}</b>{item.description9}</p><br />
						<p><b>{item.answer9}</b>{item.answerdesc9}</p><br />
						<p><b>{item.question10}</b>{item.description10}</p><br />
						<p><b>{item.answer10}</b>{item.answerdesc10}</p><br />
						<p><b>{item.question11}</b>{item.description11}</p><br />
						<p><b>{item.answer11}</b>{item.answerdesc11}</p><br />
						<p><b>{item.question12}</b>{item.description12}</p>
						<p>{item.description12a}</p><br />
						<p><b>{item.answer12}</b>{item.answerdesc12}</p><br />

						<p><b>{item.advicequestion}</b>{item.advicequestion1}</p><br />
							<p><b>{item.adviceanswer1}</b> {item.advicedesc1}</p>
						</div>

						
					</div>
				) : null
			)}
		</div>
	);
};

export default ParentsInfo;
