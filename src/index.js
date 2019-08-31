import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./Mtns/App";
// import App from "./Dice/App";
// import App from "./Lottery/App";
// import App from "./Coin/App";
// import App from "./ColorBoxes/App";
// import App from "./Hangman/App";
// import App from "./Lights/App";
// import App from "./BoxMaker/App";
// import App from "./Todo/App";
import App from "./Palette/App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
