import React, { Component } from "react";
import "./ColorBox.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false
		};
	}

	showOverlay = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	};

	render() {
		const { copied } = this.state;
		const { background, name, id, paletteId, showLink } = this.props;

		return (
			<CopyToClipboard text={background} onCopy={this.showOverlay}>
				<div className="box" style={{ background }}>
					<div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>COPIED!</h1>
						<span>{background}</span>
					</div>
					<div className="box-content">
						<span>{name}</span>
					</div>
					<button className="copy-btn">COPY</button>
					{showLink && (
						<Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
							<span className="more-btn">MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
