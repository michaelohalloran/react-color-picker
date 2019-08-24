import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
	}

	render() {
		return (
			<div className="todo-container">
				<p>{this.props.todo}</p>
				<button onClick={this.props.edit}>Edit</button>
				<button onClick={this.props.remove}>X</button>
			</div>
		);
	}
}

export default Todo;
