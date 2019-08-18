import React from "react";
import "./Die.css";

const Die = (props) => {
	const { value } = props;

	const getTextDieValue = (num) => {
		const converter = {
			1: "one",
			2: "two",
			3: "three",
			4: "four",
			5: "five",
			6: "six"
		};
		return converter[num];
	};

	return (
		<div className="die-container">
			<i
				className={`fas fa-dice-${getTextDieValue(value)} 
					${props.wobbling ? "wobble-cls" : ""}`}
			/>
		</div>
	);
};

export default Die;
