import React from "react";
import styles from "../assets/css/header.module.css";
class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Number Quest</h1>
      </div>
    );
  }
}

export default Header;
