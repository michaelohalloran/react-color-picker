import React, { Component } from "react";
import "./App.css";
import Mtndex from "./Mtndex";

class App extends Component {
	constructor() {
		super();
		this.state = {
			mountains: [
				{
					id: 4,
					name: "Elbert",
					height: 14440,
					src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mt._Elbert.jpg"
				},
				{
					id: 7,
					name: "Massive",
					height: 14428,
					src: "https://live.staticflickr.com/4445/24003660698_120b7dface_b.jpg"
				},
				{
					id: 11,
					name: "Evans",
					height: 14265,
					src: "https://live.staticflickr.com/6022/6194010020_1fd20fdcc8_b.jpg"
				},
				{
					id: 32,
					name: "Pikes Peak",
					height: 14115,
					src: "https://live.staticflickr.com/8345/8229385280_bd4ef833c5_b.jpg"
				},
				{
					id: 43,
					name: "Torreys Peak",
					height: 14275,
					src: "https://live.staticflickr.com/3598/3568124332_a3cff8e6dd_b.jpg"
				},
				{
					id: 47,
					name: "Maroon Peak",
					height: 14163,
					src: "https://cdn.pixabay.com/photo/2019/06/12/02/17/mountain-4268135_960_720.jpg"
				},
				{
					id: 49,
					name: "Longs Peak",
					height: 14259,
					src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Long%27s_Peak_Sunset.jpg"
				},
				{
					id: 53,
					name: "Crestone",
					height: 14300,
					src: "https://live.staticflickr.com/4757/26652700138_8b70a82715_b.jpg"
				}
			]
		};
	}

	render() {
		return <Mtndex mountains={this.state.mountains} />;
	}
}

export default App;
