import React from "react";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<header className="navbar">
			<div className="logo">
				<a href="#">reactcolorpicker</a>
			</div>
			<div className="slider-container">
				<span>Level {props.level}</span>
			</div>
			<div class="slider">
				<Slider
					defaultValue={props.level}
					min={100}
					max={900}
					step={100}
					onAfterChange={props.changeLevel}
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
		</header>
	);
};

export default Navbar;
