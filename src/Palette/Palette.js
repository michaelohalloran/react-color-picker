import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css"; // import this last to overwrite native slider styles

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: props.palette.colors,
			level: 500,
			colorFormat: "hex"
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

	changeFormat = (newFormat) => {
		this.setState({ colorFormat: newFormat });
	};

	render() {
		const { colorFormat } = this.state;
		const { paletteName, emoji } = this.props.palette;
		const colorBoxes = this.state.colors[this.state.level].map((palette) => {
			return <ColorBox name={palette.name} key={palette.name} background={palette[colorFormat]} />;
		});

		return (
			<div className="color-container">
				<Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
				<div className="palette">{colorBoxes}</div>
				<footer className="palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
