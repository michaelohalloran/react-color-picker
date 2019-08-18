import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rolling: false,
			die1Value: null,
			die2Value: null,
			btnText: "Roll dice!"
		};
	}

	componentDidMount() {
		const die1Value = this.calcDieValue();
		const die2Value = this.calcDieValue();
		this.setState({
			die1Value,
			die2Value
		});
	}

	roll = () => {
		this.setState(
			{
				die1Value: this.calcDieValue(),
				die2Value: this.calcDieValue(),
				rolling: true
			},
			() => {
				setTimeout(() => {
					this.setState({ rolling: false });
				}, 1500);
			}
		);
	};

	calcDieValue = () => {
		return Math.floor(Math.random() * 6 + 1);
	};

	render() {
		const { die1Value, die2Value } = this.state;
		const btnText = this.state.rolling ? "Rolling..." : "Roll dice!";

		return (
			<div className="roll-container">
				<div className="dice-container">
					<Die value={die1Value} />
					<Die value={die2Value} />
				</div>

				<button disabled={this.state.rolling} onClick={this.roll}>
					{btnText}
				</button>
			</div>
		);
	}
}

export default RollDice;
