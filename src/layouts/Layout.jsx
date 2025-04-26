import React from "react";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>React.js tutorial</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by parham</p>
      </footer>
    </>
  );
}

export default Layout;
