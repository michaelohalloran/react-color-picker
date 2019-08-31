import React from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css";

const PaletteList = (props) => {
	const { paletteList } = props;
	console.log(paletteList);

	const paletteDisplay = paletteList.map((list) => {
		const colors = list.colors.map((colorObj) => (
			<div key={colorObj.name} style={{ backgroundColor: colorObj.color, height: "50px", width: "50px" }} />
		));

		return (
			// <div className="single-palette" key={list.id}>
			<Link className="single-palette" to={`/palette/${list.id}`} key={list.id}>
				{colors}
				<div className="list-name-container">
					{list.paletteName}
					<span>{list.emoji}</span>
				</div>
			</Link>
			// </div>
		);
	});
	return <div className="palette-list-container">{paletteDisplay}</div>;
};

export default PaletteList;
