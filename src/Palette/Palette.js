import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: props.palette.colors,
			level: 500
		};
	}

	toggleBtn = (idx) => {
		const hoveredBtn = this.state.colors[idx];
		hoveredBtn.showCopyBtn = !hoveredBtn.showCopyBtn;
		this.setState({
			colors: [ ...this.state.colors.slice(0, idx), hoveredBtn, ...this.state.colors.slice(idx + 1) ]
		});
	};

	changeLevel = (newLevel) => {
		this.setState({ level: newLevel });
	};

	render() {
		const colorBoxes = this.state.colors[this.state.level].map((palette) => {
			return <ColorBox name={palette.name} key={palette.name} background={palette.hex} />;
		});

		return (
			<div className="color-container">
				<Slider
					defaultValue={this.state.level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLevel}
				/>
				<div className="palette">{colorBoxes}</div>
				<div>Footer</div>
			</div>
		);
	}
}

export default Palette;
