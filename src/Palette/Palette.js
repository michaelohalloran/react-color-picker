import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import "./Palette.css"; // import this last to overwrite native slider styles

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
				<div class="slider">
					<Slider
						defaultValue={this.state.level}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.changeLevel}
						trackStyle={{ backgroundColor: "transparent" }}
						handleStyle={{
							backgroundColor: "green",
							outline: "none",
							border: "2px solid green",
							boxShadow: "none"
						}}
						railStyle={{ height: "8px" }}
					/>
				</div>
				<div className="palette">{colorBoxes}</div>
				<div>Footer</div>
			</div>
		);
	}
}

export default Palette;
