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
		// this.props.addItem(this.state);
		// reset state
		this.setState();
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.name });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="number" name="height" onChange={this.handleChange} />
				<input type="number" name="width" onChange={this.handleChange} />
				<input type="number" name="backgroundColor" onChange={this.handleChange} />
				<button>Submit</button>
			</form>
		);
	}
}

export default NewBoxForm;
