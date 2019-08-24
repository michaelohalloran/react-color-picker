import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
	}

	addNewBox = (box) => {
		this.setState({
			boxes: [ ...this.state.boxes, box ]
		});
	};

	remove = (idx) => {
		const newBoxes = this.state.boxes.filter((box, i) => i !== idx);
		this.setState({ boxes: newBoxes });
	};

	render() {
		const boxDisplay = this.state.boxes.map((box, idx) => {
			const { height, width, backgroundColor } = box;
			const style = {
				height: `${height}px`,
				width: `${width}px`,
				backgroundColor
			};
			return <Box removeBox={this.remove} key={idx} idx={idx} style={style} />;
		});

		return (
			<div>
				<NewBoxForm addNewBox={this.addNewBox} />
				{boxDisplay}
			</div>
		);
	}
}

export default BoxList;
