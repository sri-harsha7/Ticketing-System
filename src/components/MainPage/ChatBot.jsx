import React from "react";
import styles from "./ChatBot.module.css";
import Profile from "../../assets/profile.png";

const ChatBot = () => {
  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotHeader}>
        <img src={Profile} alt="Bot Avatar" className={styles.botAvatar} />
        <span className={styles.botName}>Hubly</span>
      </div>

      <div className={styles.chatbotMessages}>
        <div>
          <img src={Profile} alt="" />
        </div>
        <div>
          <div className={styles.botMessage}>How can I help you?</div>
          <div className={styles.botMessage}>Ask me anything!</div>
        </div>
      </div>
      <div className={styles.sender}>
        <div className={styles.form}>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <h5 style={{ background: "none" }}>Introduction Yourself</h5>
            <label htmlFor="yourname">Your Name</label>
            <input type="text" placeholder="Your Name" />
            <label htmlFor="yourphone">Your Phone Number </label>
            <input type="text" placeholder="+1 (000) 000-0000" />
            <label htmlFor="youremail">Your Email</label>
            <input type="email" placeholder="example@gmail.com" />
            <div className={styles.button}>
              <button className={styles.thankYou}>Thank You !</button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.chatbotInput}>
        <input type="text" placeholder="Write a message" />
        <button className={styles.sendButton}>➤</button>
      </div>
    </div>
  );
};

export default ChatBot;
