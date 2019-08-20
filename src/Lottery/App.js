import React, { Component } from "react";
import Lottery from "./Lottery";

class App extends Component {
	render() {
		return <Lottery title="Daily Jackpot" numBalls={6} maxNum={40} />;
	}
}

export default App;
