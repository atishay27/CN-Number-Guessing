import React from "react";
import styles from "../assets/css/instructions.module.css";

class Instructions extends React.Component {
  render() {
    const { handleGameStart } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          Welcome to the Number Quest! Guess the secret number chosen by the
          computer. The player who guesses the number in the fewest tries wins.
        </div>
        <div className={styles.instructionsContainer}>
          <h1 className={styles.instTitle}>How to Play:</h1>
          <ol className={styles.mainList}>
            <li className={styles.mainListItem}>
              <div>Enter Player Names:</div>
              <ul className={styles.subList}>
                <li>Enter the names of all players.</li>
              </ul>
            </li>
            <li className={styles.mainListItem}>
              <div>Start the Game:</div>
              <ul className={styles.subList}>
                <li>
                  The computer picks a secret number between 1 and 100
                  (inclusive).
                </li>
              </ul>
            </li>
            <li className={styles.mainListItem}>
              <div>Take Turns:</div>
              <ul className={styles.subList}>
                <li>Players take turns guessing the number.</li>
                <li>Enter your guess and submit.</li>
              </ul>
            </li>
            <li className={styles.mainListItem}>
              <div>Feedback:</div>
              <ul className={styles.subList}>
                <li>"Higher" if the guess is too low.</li>
                <li>"Lower" if the guess is too high.</li>
                <li>"Correct" if the guess is right.</li>
              </ul>
            </li>
            <li className={styles.mainListItem}>
              <div>Continue Until Correct:</div>
              <ul className={styles.subList}>
                <li>Keep guessing until the correct number is guessed.</li>
              </ul>
            </li>
            <li className={styles.mainListItem}>
              <div>End of Game:</div>
              <ul className={styles.subList}>
                <li>The game ends when the number is guessed.</li>
                <li>The player with the fewest tries wins.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleGameStart}>Start Playing</button>
        </div>
      </div>
    );
  }
}

export default Instructions;
