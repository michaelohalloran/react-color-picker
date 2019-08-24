import React from "react";
import "./ColorBox.css";

const ColorBox = (props) => {
	const { background, name } = props;
	return (
		<div className="box" style={{ background }}>
			<div className="box-content">
				<span>{name}</span>
			</div>
			<button className="copy-btn">COPY</button>
			<span class="more-btn">MORE</span>
		</div>
	);
};

export default ColorBox;
