import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		const { palette, colorId } = this.props;
		this._shades = this.gatherShades(palette, colorId);
		console.log("shades: ", this._shades);
	}

	gatherShades = (palette, colorId) => {
		const allColors = palette.colors;
		const numKeys = Object.keys(allColors);
		return numKeys.reduce((finalArr, nextNum) => {
			const found = allColors[nextNum].filter(
				(color) => color.id === colorId && !color.name.slice(-2).includes("50")
			);
			return finalArr.concat(found);
		}, []);
	};

	render() {
		const colorBoxes = this._shades.map((shade) => (
			<ColorBox
				background={shade.hex}
				showLink={false}
				name={shade.name}
				id={shade.id}
				paletteId={null}
				key={shade.id}
			/>
		));
		return <div className="palette">{colorBoxes}</div>;
	}
}

export default SingleColorPalette;
