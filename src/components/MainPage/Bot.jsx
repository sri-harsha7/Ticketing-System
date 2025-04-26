import React from "react";
import styles from "./Bot.module.css";
import Chatbot from "./ChatBot";
const Bot = () => {
  return (
    <div className={styles.chatbot}>
      <div className={styles.mainHeading}>
        <h2>Chat Bot</h2>
      </div>
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Bot;
