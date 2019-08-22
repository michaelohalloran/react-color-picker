import React, { Component } from "react";
import Box from "./Box";
import "./Container.css";

const boxArr = Array(16).fill(1);

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: boxArr
		};
	}

	componentDidMount() {
		const boxes = this.state.boxes.map((box) => this.generateRandomHexColor());
		this.setState({
			boxes
		});
	}

	changeColor = (idx) => {
		// reach into box arr to find this color, using idx, and change it
		let boxToChange = this.state.boxes[idx];
		boxToChange = this.generateRandomHexColor();
		this.setState({
			boxes: [ ...this.state.boxes.slice(0, idx), boxToChange, ...this.state.boxes.slice(idx + 1) ]
		});
	};

	generateRandomHexColor = () => {
		// 3 random nums btwn 0-255, for hex codes
		const randomNums = Array(3).fill(1).map((num) => Math.floor(Math.random() * 256).toString(16));
		return `#${randomNums.join("")}`; // outputs, e.g., "#12fa34"
	};

	handleClick = (idx) => {
		this.changeColor(idx);
	};

	render() {
		const boxes = this.state.boxes.map((box, i) => <Box key={i} color={box} onClick={() => this.handleClick(i)} />);

		return <div className="container">{boxes}</div>;
	}
}

export default Container;
