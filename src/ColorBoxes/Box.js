import React from "react";
import "./Box.css";

const Box = (props) => {
	const { onClick, color } = props;
	return <div onClick={() => onClick()} className="box" style={{ backgroundColor: color }} />;
};

export default Box;
