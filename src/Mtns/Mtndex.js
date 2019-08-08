import React, { Component } from "react";
import Mountain from "./Mountain";
import "./Mtndex.css";

class Mtndex extends Component {
	state = {
		topElevation: 0,
		bottomElevation: 0
	};

	componentDidMount() {
		const shuffledMountains = this.shuffleMountains(this.props.mountains);
		this.calcHeights(shuffledMountains);
	}

	calcHeights = (mtnsArr) => {
		const numMtns = mtnsArr.length;
		// divide mountains into halves
		const topHalf = mtnsArr.slice(0, numMtns / 2);
		const bottomHalf = mtnsArr.slice(numMtns / 2);
		const topElevation = topHalf.reduce((totalElevation, nextMtn) => totalElevation + nextMtn.height, 0);
		const bottomElevation = bottomHalf.reduce((totalElevation, nextMtn) => totalElevation + nextMtn.height, 0);
		// return [ totalTopElevation, totalBottomElevation ];
		this.setState({
			topElevation,
			bottomElevation
		});
	};

	shuffleMountains = (arr) => {
		return arr.sort(() => 0.5 - Math.random());
	};

	calcWinner = (topScore, bottomScore, isTop) => {
		const topWins = topScore > bottomScore;
		return topWins && isTop ? "winner" : topWins && !isTop ? "loser" : !topWins && isTop ? "loser" : "winner";
	};

	reload = () => {
		const reshuffled = this.shuffleMountains(this.props.mountains);
		this.calcHeights(reshuffled);
	};

	render() {
		const { topElevation, bottomElevation } = this.state;
		const shuffledMountains = this.shuffleMountains(this.props.mountains);
		// this.calcHeights(shuffledMountains);

		const mountains = shuffledMountains.map((mtn) => <Mountain key={mtn.id} mountain={mtn} />);
		return (
			<div className="mtn-container">
				<div className="header">
					<h1>Colorado Fourteeners</h1>
					<button onClick={this.reload}>Recalculate</button>
					<p className={this.calcWinner(topElevation, bottomElevation, true)}>
						Top row total elevation: {topElevation}{" "}
					</p>
					<p className={this.calcWinner(topElevation, bottomElevation, false)}>
						Bottom row total elevation: {bottomElevation}{" "}
					</p>
				</div>
				{mountains}
			</div>
		);
	}
}

export default Mtndex;
