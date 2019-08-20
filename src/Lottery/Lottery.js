import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: []
		};
	}

	componentDidMount() {
		this.loadNums();
	}

	loadNums = () => {
		this.setState({
			nums: [ ...this.generateRandomNums() ]
		});
	};

	generateRandomNums = () => {
		const { numBalls, maxNum } = this.props;
		return Array(numBalls).fill(1).map((num) => Math.floor(Math.random() * maxNum + 1));
	};

	render() {
		const balls = this.state.nums.map((num) => <Ball num={num} />);

		return (
			<div className="lotto-container">
				<h1>{this.props.title}</h1>
				<div className="ball-container">{balls}</div>
				<button onClick={this.loadNums}>Generate</button>
			</div>
		);
	}
}

export default Lottery;
