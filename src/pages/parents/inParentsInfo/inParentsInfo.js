import React from "react";
import "./parentsInfo1.scss";
import img from "../../../media/2.1.jpg";
import navParents from "../../../components/data/data.json";
import parentsInfo from "../../../components/data/data.json";
import { useParams, useNavigate } from "react-router-dom";
// import { Nav } from "../../../components/navbar/nav";
const InParentsInfo = () => {
	const params = useParams();
	const nav = useNavigate();
	console.log(params.categ);
	return (
		<div className="parentsInfo">
			<button onClick={() => nav(-1)}>{"<"}</button>
			{parentsInfo?.parentsInfo?.map((item, index) =>
				params?.categ === item.id ? (
					<div className="parentsInfo__titles" key={index}>
						{console.log("item.id >>> ", item.id)}
						<h1 className="parentsInfo__titles-title">{item.title}</h1>
						<div>
							<p>{item.description}</p>
						</div>
						<p className="parentsInfo__titles-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
							earum illum maiores inventore accusantium laudantium. Excepturi
							totam unde nobis nemo assumenda maxime voluptatum odio recusandae,
							praesentium cumque similique culpa expedita reprehenderit debitis
							error ab beatae. Excepturi accusantium exercitationem ratione
							aspernatur dolores. Voluptates temporibus ad mollitia veniam totam
							commodi ut voluptate labore minima illum reiciendis id sunt enim
							cumque autem, voluptatem libero suscipit? Nemo eum magnam voluptas
							iusto. Sunt laborum, veritatis illo iure, in repudiandae quam
							temporibus dolorum, inventore dolor rerum corrupti tenetur facilis
							enim natus unde aliquam delectus! Fugit, voluptatibus architecto
							necessitatibus dignissimos eius sapiente tempora numquam ipsam
							minus optio.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
							aspernatur optio, esse minus, beatae consectetur inventore officia
							reiciendis cupiditate est omnis distinctio laudantium illum, iste
							tempore soluta non ratione repellendus odit? Repudiandae voluptate
							sit repellendus iste quo velit maiores aliquam odio id quisquam
							harum soluta ipsa autem dolores, quasi facilis animi voluptas,
							suscipit ipsam reprehenderit rem. Illum, non autem natus
							laudantium, eaque quo dolorem provident nulla eos ex temporibus!
							Temporibus placeat magni quasi aperiam facilis perspiciatis,
							officia harum dicta quam veniam id error reiciendis veritatis
							nobis! Ipsum recusandae enim quibusdam nobis! Accusantium illo
							similique voluptatem ex magni, repudiandae dolorem nihil.
						</p>
					</div>
				) : null
			)}
		</div>
	);
};

export default InParentsInfo;
