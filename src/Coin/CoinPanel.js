import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinPanel.css";

class CoinPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flips: 0,
			heads: 0,
			tails: 0,
			currentCoin: ""
		};
	}

	flip = () => {
		const isHeads = Math.random() < 0.5;
		const isTails = !isHeads;
		const heads = isHeads ? this.state.heads + 1 : this.state.heads;
		const tails = isTails ? this.state.tails + 1 : this.state.tails;
		const flips = this.state.flips + 1;
		const currentCoin = isHeads ? "heads" : "tails";

		this.setState({
			flips,
			heads,
			tails,
			currentCoin
		});
	};

	render() {
		const { flips, heads, tails } = this.state;

		return (
			<div className="coin-panel">
				<Coin currentCoin={this.state.currentCoin} />
				<p>Total Flips: {flips}</p>
				<p>Total Heads: {heads} </p>
				<p>Total Tails: {tails}</p>
				<button onClick={this.flip}>Flip</button>
			</div>
		);
	}
}

export default CoinPanel;
