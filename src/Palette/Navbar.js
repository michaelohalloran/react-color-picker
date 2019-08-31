import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
			open: false
		};
	}

	handleChange = (e) => {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	};

	closeSnackbar = (e, reason) => {
		this.setState({ open: false });
	};

	render() {
		const { level, changeLevel } = this.props;
		const { format, open } = this.state;

		return (
			<header className="navbar">
				<div className="logo">
					<Link to="/">reactcolorpicker</Link>
				</div>
				<div className="slider-container">
					<span>Level {level}</span>
				</div>
				<div className="slider">
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
				<Snackbar
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left"
					}}
					open={open}
					autoHideDuration={3000}
					onClose={this.closeSnackbar}
					ContentProps={{
						"aria-describedby": "message-id"
					}}
					message={<span id="message-id">Format changed to {format}</span>}
					action={[
						<IconButton key="close" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}

export default Navbar;
