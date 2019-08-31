import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex"
		};
	}

	handleChange = (e) => {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
	};

	render() {
		const { level, changeLevel, colorFormat, handleChange } = this.props;
		const { format } = this.state;

		return (
			<header className="navbar">
				<div className="logo">
					<a href="#">reactcolorpicker</a>
				</div>
				<div className="slider-container">
					<span>Level {level}</span>
				</div>
				<div class="slider">
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={changeLevel}
						trackStyle={{ backgroundColor: "transparent" }}
						handleStyle={{
							backgroundColor: "green",
							outline: "none",
							border: "2px solid green",
							boxShadow: "none"
						}}
						railStyle={{ height: "8px" }}
					/>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb 255, 255, 255</MenuItem>
						<MenuItem value="rgba">RGBA - rgba 255, 255, 255, 1.0</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}

export default Navbar;
