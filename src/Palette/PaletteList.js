import React from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css";
import MiniPalette from "./MiniPalette";

const PaletteList = (props) => {
	const { paletteList } = props;
	const miniPalettes = paletteList.map((list) => <MiniPalette {...list} />);
	return <div className="palette-list-container">{miniPalettes}</div>;
};

export default PaletteList;
