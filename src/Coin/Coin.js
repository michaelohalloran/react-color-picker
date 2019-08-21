import React from "react";
import "./Coin.css";

const Coin = (props) => {
	const { currentCoin } = props;
	const img =
		currentCoin === "tails"
			? "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
			: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg";

	return <img src={img} />;
};

export default Coin;
