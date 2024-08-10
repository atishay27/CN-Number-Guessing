import React from "react";
import styles from "../assets/css/game.module.css";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      number: "",
    };
  }
  handleNumChange = (newValue) => {
    this.setState({
      number: newValue,
    });
  };
  handleWin = (actual, guess, stopGame) => {
    if (parseInt(actual) === parseInt(guess)) {
      stopGame();
      return true;
    } else {
      return false;
    }
  };
  getHint = (actual, guess) => {
    if (parseInt(actual) > parseInt(guess)) {
      return "Choose a Higher Number";
    } else {
      return "Choose a Lower Number";
    }
  };
  render() {
    const { number } = this.state;
    const {
      name,
      genNumber,
      selectedNum,
      firstPlay,
      handleNumberSelection,
      handleGameStop,
    } = this.props;
    return (
      <div className={styles.gameContainer}>
        <div className={styles.playerInfo}>
          Now Playing: <b>{name}</b>
        </div>
        <input
          className={styles.guessInput}
          placeholder="Guess The Number"
          type="number"
          value={number}
          onChange={(e) => {
            this.handleNumChange(e.target.value);
          }}
        />
        <button
          className={styles.guessBtn}
          onClick={() => {
            handleNumberSelection(parseInt(number));
          }}
        >
          SUBMIT
        </button>
        {!firstPlay && (
          <>
            <div className={styles.selectedText}>
              Last Selected: <b>{selectedNum}</b>
            </div>
            <div className={`${styles.resultText} ${styles.incorrect}`}>
              {!this.handleWin(genNumber, selectedNum, handleGameStop) &&
                "Try Again!"}
            </div>

            <div className={styles.hintText}>
              <b>HINT: </b>
              {this.getHint(genNumber, selectedNum)}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Game;
