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

	render() {
		return (
			<div>
				<Box />
				<NewBoxForm />
			</div>
		);
	}
}

export default BoxList;
