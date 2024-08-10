import React from "react";
import Instructions from "./components/Instructions";
import styles from "./assets/css/app.module.css";
import Header from "./components/Header";
import SinglePlayerGame from "./components/SinglePlayer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showInstruction: true,
    };
  }
  handleGameStart = () => {
    this.setState({
      showInstruction: false,
    });
  };
  render() {
    const { showInstruction } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.subContainer}>
          {showInstruction ? (
            <Instructions handleGameStart={this.handleGameStart} />
          ) : (
            <SinglePlayerGame />
          )}
        </div>
      </div>
    );
  }
}

export default App;
