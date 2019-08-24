import React, { Component } from "react";

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			width: 0,
			backgroundColor: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// pass data up to parent
		this.props.addNewBox(this.state);
		// reset state
		this.setState({
			height: 0,
			width: 0,
			backgroundColor: ""
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="height">Height: </label>
				<input
					type="number"
					min="1"
					name="height"
					value={this.state.height}
					onChange={this.handleChange}
				/>{" "}
				<br />
				<label htmlFor="width">Width: </label>
				<input type="number" min="1" name="width" value={this.state.width} onChange={this.handleChange} />{" "}
				<br />
				<label htmlFor="backgroundColor">Background Color: </label>
				<input
					type="text"
					name="backgroundColor"
					value={this.state.backgroundColor}
					onChange={this.handleChange}
				/>{" "}
				<br />
				<button>Add new form</button>
			</form>
		);
	}
}

export default NewBoxForm;
