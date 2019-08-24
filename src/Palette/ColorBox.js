import React from "react";
import "./ColorBox.css";

const ColorBox = (props) => {
	return (
		<div className="box" style={{ background: props.background }}>
			<span>{props.name}</span>
			MORE
		</div>
	);
};

export default ColorBox;
