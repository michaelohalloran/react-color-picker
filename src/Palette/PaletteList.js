import React from "react";
import "./PaletteList.css";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center"
	},
	container: {
		display: "flex",
		width: "50%",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap"
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white"
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%"
	}
};

const PaletteList = (props) => {
	const { paletteList, classes } = props;
	console.log("props: ", props);

	function goToPalette(id) {
		props.history.push(`/palette/${id}`);
	}

	const miniPalettes = paletteList.map((list) => (
		<Link key={list.id} to={`/palette/${list.id}`}>
			<MiniPalette {...list} handleClick={() => goToPalette(list.id)} />
		</Link>
	));
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
				</nav>
				<div className={classes.palettes}>{miniPalettes}</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(PaletteList);
