import React, { Component } from "react";
import "./Hangman.css";

class Hangman extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: new Set(),
			wrongGuesses: 0,
			letterDisplay: "",
			answer: "apple",
			maxGuesses: props.maxGuesses
		};
	}

	componentDidMount() {
		// generate buttons
		// generate random answer
		// this.generateRandomAnswer();
		// set state of letter display, w/ numUnderscores = maxAllowedWrongGuesses (put this in state? or as prop from App?)
		this.generateLetterDisplay();
	}

	generateRandomAnswer = () => {
		// generate random word (from API?)
		this.setState({
			answer: "apple"
		});
	};

	generateLetterDisplay = () => {
		const len = this.state.answer.length;
		const letterDisplay = Array(len).fill("_").join("");
		this.setState({
			letterDisplay
		});
	};

	makeGuess = (letter) => {
		const isWrong = !this.state.answer.includes(letter);
		// update letterDisplay if it's right
		const updatedDisplay = !isWrong && this.updateLetterDisplay(letter);

		// check if user has won the game (perhaps sort the answer a-z, see if adding this letter would yield a win)

		this.setState((prevState) => ({
			guesses: this.state.guesses.add(letter),
			wrongGuesses: isWrong ? prevState.wrongGuesses + 1 : prevState.wrongGuesses,
			letterDisplay: isWrong ? prevState.letterDisplay : updatedDisplay
		}));
	};

	updateLetterDisplay = (letter) => {
		// compare guess to answer, find idx match,
		// add new letter to display, in the right place (compare to idx of the correct answer,
		//add it at that spot using substr)
		const { answer, letterDisplay } = this.state;
		// ex: answer is apple, guess p
		const idxMatches = answer
			.split("")
			.map((ltr, idx) => {
				if (ltr === letter) {
					return idx;
				}
			})
			.filter((item) => item !== undefined);
		// ex: returns [1,2] for indices where p's are found
		// loop over this, insert p's in letterDisplay at those indices
		const newLetterDisplay = letterDisplay.split("").map((ltr, idx) => {
			if (idxMatches.includes(idx)) {
				return letter;
			} else {
				return ltr;
			}
		});
		return newLetterDisplay.join("");
	};

	generateButtons = () => {
		return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
			// add disable CSS styling (grayed out)
			<button
				key={letter}
				className="btn"
				disabled={this.state.guesses.has(letter)}
				onClick={() => this.makeGuess(letter)}
			>
				{letter}
			</button>
		));
	};

	calcWinner = () => {
		const { maxGuesses, answer, letterDisplay, wrongGuesses } = this.state;
		// if maxGuesses is reached and ltrDisplay !== answer, user loses
		if (wrongGuesses === maxGuesses) {
			return "You lose!";
		} else if (letterDisplay === answer) {
			// if ltrDiplay at any time does = answer, user wins
			return "You win!";
		} else {
			return "";
		}
	};

	reset = () => {
		this.setState({
			guesses: new Set(),
			wrongGuesses: 0,
			letterDisplay: "",
			answer: "apple",
			maxGuesses: this.props.maxGuesses
		});
		this.generateLetterDisplay();
	};

	render() {
		const letterDisplay = <div>{this.state.letterDisplay}</div>;
		const resultMsg = this.calcWinner();

		const buttons = this.generateButtons();

		return (
			<div className="container">
				<div className="letter-container">
					{letterDisplay}
					<h3>{resultMsg}</h3>
				</div>
				<div className="btn-container">
					{buttons}
					<button className="reset-btn" onClick={this.reset}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

export default Hangman;
