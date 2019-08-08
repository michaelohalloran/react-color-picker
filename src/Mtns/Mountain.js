import React from "react";
import "./Mountain.css";

const Mountain = ({ mountain }) => {
	return (
		<div className="mountain-card">
			<h3>{mountain.name}</h3>
			<img src={mountain.src} alt={mountain.name} />
			<p>{mountain.height} ft. elevation</p>
		</div>
	);
};

export default Mountain;
