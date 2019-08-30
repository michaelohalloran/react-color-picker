import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
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
				<Navbar level={this.state.level} changeLevel={this.changeLevel} />
				<div className="palette">{colorBoxes}</div>
				<div>Footer</div>
			</div>
		);
	}
}

export default Palette;
