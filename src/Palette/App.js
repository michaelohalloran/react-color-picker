import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
	render() {
		return <Palette palette={seedColors[3]} />;
	}
}

export default App;
