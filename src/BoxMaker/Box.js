import React from "react";

const Box = (props) => {
	const handleRemoveClick = () => {
		props.removeBox(props.idx);
	};

	return (
		<div>
			<div style={props.style} />
			<button onClick={handleRemoveClick}>Remove Box</button>
		</div>
	);
};

export default Box;
