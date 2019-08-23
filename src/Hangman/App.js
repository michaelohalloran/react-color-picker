import React, { Component } from "react";
import Hangman from "./Hangman";

class App extends Component {
	render() {
		return <Hangman maxGuesses={6} />;
	}
}

export default App;
