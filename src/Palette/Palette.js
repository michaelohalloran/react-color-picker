import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

class Palette extends Component {
	constructor(props) {
		// console.log("seedColors: ", props.palette);
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
		// const colors = this.state.colors.map((palette, idx) => {
		// 	palette.showCopyBtn = palette.showCopyBtn || false;
		// 	const style = { backgroundColor: palette.color };
		// 	return (
		// 		<div
		// 			key={palette.name}
		// 			onMouseLeave={() => this.toggleBtn(idx)}
		// 			onMouseEnter={() => this.toggleBtn(idx)}
		// 			className="box"
		// 			style={style}
		// 		>
		// 			<span>{palette.name}</span>
		// 			<button className={`copy-btn ${palette.showCopyBtn && "show"}`}>COPY</button>
		// 			<button className="more-btn">More</button>
		// 		</div>
		// 	);
		// });

		const colorBoxes = this.state.colors.map((palette, idx) => {
			return <ColorBox name={palette.name} key={palette.name} background={palette.color} />;
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
