import React, { Component } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [], // array of objs: [{text: "Walk the dog", isEditing: false}, etc.]
			editText: ""
		};
	}

	addTodo = (todo) => {
		const newTodo = { text: todo, isEditing: false };
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	removeTodo = (idx) => {
		const newTodos = this.state.todos.filter((todo, i) => i !== idx);
		this.setState({
			todos: newTodos
		});
	};

	editTodo = (idx) => {
		const todoToEdit = this.state.todos[idx];
		todoToEdit.isEditing = true;
		this.setState({
			todos: [ ...this.state.todos.slice(0, idx), todoToEdit, ...this.state.todos.slice(idx + 1) ]
		});
	};

	handleEdit = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitEdit = (e, idx) => {
		e.preventDefault();
		this.state.todos[idx] = { text: this.state.editText, isEditing: false };
		this.setState({
			todos: [ ...this.state.todos ],
			editText: ""
		});
	};

	render() {
		const todos = this.state.todos.map((todo, idx) => {
			return !todo.isEditing ? (
				<Todo todo={todo.text} key={idx} edit={() => this.editTodo(idx)} remove={() => this.removeTodo(idx)} />
			) : (
				<div>
					<input
						name="editText"
						onChange={this.handleEdit}
						value={this.state.editText ? this.state.editText : todo.text}
					/>
					<button onClick={(e) => this.submitEdit(e, idx)}>Save</button>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="inner-container">
					<h1>Todo List!</h1>
					<hr />
					{todos}

					<h4>New Todo</h4>
					<NewTodoForm addTodo={this.addTodo} />
				</div>
			</div>
		);
	}
}

export default TodoList;
