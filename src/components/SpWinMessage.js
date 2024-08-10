import React from "react";
import styles from "../assets/css/winMessage.module.css";

class SpWinMessage extends React.Component {
  render() {
    const { tries, handleGameRestart } = this.props;
    return (
      <div className={styles.messageContainer}>
        <div className={styles.mainMessage}>Congratualtions!!</div>
        <div className={styles.subMessage}>
          You Have Won The Game In: <b>{tries}</b> Tries
        </div>
        <button className={styles.restartBtn} onClick={handleGameRestart}>
          RESTART
        </button>
      </div>
    );
  }
}

export default SpWinMessage;
