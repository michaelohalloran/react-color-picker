import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: props.palette.colors
		};
	}

	toggleBtn = (idx) => {
		const hoveredBtn = this.state.colors[idx];
		hoveredBtn.showCopyBtn = !hoveredBtn.showCopyBtn;
		this.setState({
			colors: [ ...this.state.colors.slice(0, idx), hoveredBtn, ...this.state.colors.slice(idx + 1) ]
		});
	};

	render() {
		const colorBoxes = this.state.colors[300].map((palette, idx) => {
			return <ColorBox name={palette.name} key={palette.name} background={palette.hex} />;
		});

		return (
			<div className="color-container">
				<div className="palette">{colorBoxes}</div>
				<div>Footer</div>
			</div>
		);
	}
}

export default Palette;
