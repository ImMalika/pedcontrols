import React from "react";
import parentsInfo from "../../../components/data/data.json";

const ParentsInfo = () => {
	return (
		<div>{parentsInfo.ParentsInfo.map((item, index) => console.log(item))}</div>
	);
};

export default ParentsInfo;
