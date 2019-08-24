import React from "react";
import "./Light.css";

const Light = (props) => {
	const { onClick, row, col, on } = props;

	const handleClick = () => {
		console.log("handleClick");
		onClick();
	};

	// apply "on" class if light is on
	return <div className={`light ${on ? "on" : ""}`} onClick={handleClick} />;
};

export default Light;
