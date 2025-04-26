import { useState } from "react";

import styles from "./Landing.module.css";
import Header from "./Header";
import Hero from "./Hero";
import Companies from "./Companies";
import Hero2 from "./Hero2";
import Payment from "./Payment";
import Footer from "./Footer";
import chat from "../../assets/chat.png";
import ChatBot from "../../components/MainPage/ChatBot";
const Landing = () => {
  const [showChat, setShowChat] = useState(false);
  const handleChat = () => {
    if (showChat) {
      setShowChat(false);
    } else {
      setShowChat(true);
    }
  };
  return (
    <div className={styles.landing}>
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      <Hero2></Hero2>
      <Payment></Payment>
      <Footer></Footer>
      <div>
        <img src={chat} alt="" className={styles.chat} onClick={handleChat} />
      </div>
      <div className={styles.chatBot}>{showChat && <ChatBot></ChatBot>}</div>
    </div>
  );
};
export default Landing;
