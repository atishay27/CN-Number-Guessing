import React from "react";
import styles from "../assets/css/spForm.module.css";

class SpForm extends React.Component {
  render() {
    const { name, nameChange, handleStart } = this.props;
    return (
      <div className={styles.formContainer}>
        <input
          className={styles.nameInput}
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            nameChange(e.target.value);
          }}
        />
        <button className={styles.startBtn} onClick={handleStart}>
          START
        </button>
      </div>
    );
  }
}

export default SpForm;
