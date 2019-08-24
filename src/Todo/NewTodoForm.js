import React, { Component } from "react";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ""
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="todo" onChange={this.handleChange} value={this.state.todo} />
				<button>Add</button>
			</form>
		);
	}
}

export default NewTodoForm;
