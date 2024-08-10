import React from "react";
import styles from "../assets/css/singlePlayer.module.css";
import SpForm from "./SpForm";
import Game from "./Game";
import SpWinMessage from "./SpWinMessage";

class SinglePlayerGame extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      start: false,
      genNumber: 0,
      selectedNum: 0,
      firstPlay: true,
      tries: 0,
      stopGame: false,
    };
  }
  handleNameChange = (newName) => {
    this.setState({
      name: newName,
    });
  };

  handleGameStop = () => {
    this.setState({
      stopGame: true,
    });
  };

  handleNumberSelection = (newNumber) => {
    this.setState({
      selectedNum: parseInt(newNumber),
      firstPlay: false,
      tries: this.state.tries + 1,
    });
  };

  handleStart = () => {
    let number = Math.floor(Math.random() * 100) + 1;
    this.setState({
      start: true,
      genNumber: number,
    });
  };

  handleGameRestart = () => {
    let number = Math.floor(Math.random() * 100) + 1;
    this.setState({
      name: this.state.name,
      start: true,
      genNumber: number,
      selectedNum: 0,
      firstPlay: true,
      tries: 0,
      stopGame: false,
    });
  };

  render() {
    const { name, start, genNumber, selectedNum, firstPlay, stopGame, tries } =
      this.state;
    return (
      <div className={styles.container}>
        {start === false ? (
          <SpForm
            name={name}
            nameChange={this.handleNameChange}
            handleStart={this.handleStart}
          />
        ) : (
          <>
            {stopGame ? (
              <SpWinMessage
                tries={tries}
                handleGameRestart={this.handleGameRestart}
              />
            ) : (
              <Game
                name={name}
                genNumber={genNumber}
                selectedNum={selectedNum}
                firstPlay={firstPlay}
                handleNumberSelection={this.handleNumberSelection}
                handleGameStop={this.handleGameStop}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default SinglePlayerGame;
