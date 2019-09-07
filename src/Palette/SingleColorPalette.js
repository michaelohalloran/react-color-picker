import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorFormat: "hex"
		};
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

	changeFormat = (newFormat) => {
		this.setState({ colorFormat: newFormat });
	};

	render() {
		const { colorFormat } = this.state;
		const { paletteName, emoji } = this.props.palette;

		const colorBoxes = this._shades.map((shade) => (
			<ColorBox
				background={shade[colorFormat]}
				showLink={false}
				name={shade.name}
				id={shade.id}
				paletteId={null}
				key={shade.hex}
			/>
		));
		return (
			<div className="color-container">
				<Navbar isSingleColor={true} handleChange={this.changeFormat} />
				<div className="palette">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;
