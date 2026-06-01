import React from "react";
import styles from "./PageHeader.module.css";
export default function PageHeader() {
  return (
    <div className={styles.pageHeader}>
      <h1>Welcome to Next App</h1>
      <p>This is Header section and will be displayed at the top of every page.</p>
    </div>
  );
};