import React, { Component } from "react";
import Light from "./Light";
import "./LightContainer.css";

class LightContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numLights: props.numLights,
			lights: [], // {row: Number, col: Number, on: Boolean}
			hasWon: false
		};
	}

	componentDidMount() {
		this.generateLights();
	}

	generateLights = () => {
		const { numLights } = this.state;
		// numLights will always be a square (9, 16, 25, etc.), so use that to determine rows
		const numRows = Math.sqrt(numLights);
		const numCols = numRows;

		const lights = Array(numLights).fill(1).map((light, idx) => ({
			row: Math.floor(idx / numRows), // if 4 rows, idx 0-3 are row1, 4-7 are row2, etc.
			col: idx % numCols, // if 4 cols, indices 2, 6, 10, etc. will be col 4
			on: Math.random() < 0.25
		}));

		this.setState({
			lights
		});
	};

	toggle = (light) => {
		// const {lights} = this.state;

		// toggle light's on/off property
		light.on = !light.on;
		// toggle surrounding lights correctly
		const updatedLights = this.toggleSurroundingLights(light);

		// const lightsBefore = lights.slice(0,idx);
		// const lightsAfter = lights.slice(idx+1);
		// &&&&&&&&&&&& the above may not work; may need to return lights from
		// second toggle function

		// put it back in array
		this.setState(
			{
				lights: updatedLights
			},
			() => {
				this.calcWinner();
			}
		);
	};

	toggleSurroundingLights = (light) => {
		// if a light is 1 away in either col or row than clicked light, toggle it
		const { lights } = this.state;
		// toggle current light
		// light.on = !light.on
		lights.forEach((lt) => {
			let rowDiff = Math.abs(light.row - lt.row);
			let colDiff = Math.abs(light.col - lt.col);
			// neighbors are combo of no more than 1 row and 1 col away
			const leftOrRight = rowDiff === 0 && colDiff === 1;
			const topOrBottom = colDiff === 0 && rowDiff === 1;
			const diagonal = rowDiff === 1 && colDiff === 1;
			let isNeighbor = leftOrRight || topOrBottom || diagonal;
			if (isNeighbor) {
				lt.on = !lt.on;
			}
		});
		return lights;
	};

	calcWinner = () => {
		// if all lights are off, game is won
		const { lights } = this.state;
		const allOff = lights.every((light) => !light.on);
		if (allOff) {
			this.setState({
				hasWon: true
			});
		}
	};

	reset = () => {
		this.setState(
			{
				lights: [],
				hasWon: false,
				numLights: this.props.numLights
			},
			() => {
				this.generateLights();
			}
		);
	};

	render() {
		const lights = this.state.lights.map((light, idx) => (
			<Light row={light.row} col={light.col} on={light.on} key={idx} onClick={() => this.toggle(light, idx)} />
		));

		const resultMsg = this.state.hasWon ? "You win!" : "Keep playing!";

		return (
			<div className="light-grid">
				<h1 className="header">Lights Out</h1>
				{lights}
				<div className="reset-container">
					<h3 className="result-msg">{resultMsg}</h3>
					<button onClick={this.reset}>Reset</button>
				</div>
			</div>
		);
	}
}

export default LightContainer;
