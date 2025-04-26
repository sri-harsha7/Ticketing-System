import logo from "../../assets/logoSmall.png";

import styles from "./Main.module.css";
// import HomeIcon from "../IconsSVG/Home";
// import Comment from "../IconsSVG/Comment";
// import Graph from "../IconsSVG/Graph";
// import Bot from "../IconsSVG/Bot";
// import People from "../IconsSVG/People";
// import Setting from "../IconsSVG/Setting";
import Profile from "../IconsSVG/Profile";
import Home from "./Home";

import ContactCenter from "./ContactCenter";
import Analytics from "./Analytics";
import Bot from "./Bot";
import Team from "./Team";
import Settings from "./Settings";
import { useState } from "react";

const Main = () => {
  const [home, setHome] = useState(true);
  const [contact, setContact] = useState(false);
  const [bot, setBot] = useState(false);
  const [team, setTeam] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [settings, setSettings] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  const handleHome = (home) => {
    if (home) {
      setHome(false);
    } else {
      setHome(true);
    }
    setActiveComponent("home");
  };

  const handleContact = (contact) => {
    if (contact) {
      setContact(false);
    } else {
      setContact(true);
    }
    setActiveComponent("contact");
  };
  const handleBot = (bot) => {
    if (bot) {
      setBot(false);
    } else {
      setBot(true);
    }
    setActiveComponent(bot);
  };

  const handleTeam = (team) => {
    if (team) {
      setTeam(false);
    } else {
      setTeam(true);
    }
    setActiveComponent("team");
  };

  const handleAnalytics = (analytics) => {
    if (analytics) {
      setAnalytics(false);
    } else {
      setAnalytics(true);
    }
    setActiveComponent("analytics");
  };
  const handleSettings = (settings) => {
    if (settings) {
      setSettings(false);
    } else {
      setSettings(true);
    }
    setActiveComponent("settings");
  };
  return (
    <div className={styles.main}>
      <aside>
        <div>
          <img
            src={logo}
            className="logo"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.icons}>
          <div>
            <div className={styles.icon} onClick={() => handleHome("home")}>
              <i class="bi bi-house-door"></i>
            </div>
            <div>
              {activeComponent === "home" && (
                <div style={{ marginTop: "10px" }}>
                  <p>Home</p>
                </div>
              )}
            </div>
            <div
              className={styles.icon}
              onClick={() => handleContact("contact")}
            >
              <i class="bi bi-chat-left-text"></i>
            </div>
            <div>{activeComponent === "contact" && <p>Contact Center</p>}</div>
            <div className={styles.icon} onClick={handleAnalytics}>
              <i class="bi bi-bar-chart"></i>
            </div>
            <div>{activeComponent === "analytics" && <p>Analytics</p>}</div>

            <div className={styles.icon} onClick={() => handleBot("bot")}>
              <i class="bi bi-robot"></i>
            </div>
            <div>{activeComponent === "bot" && <p>Bot</p>}</div>
            <div className={styles.icon} onClick={() => handleTeam("team")}>
              <i class="bi bi-people-fill"></i>
            </div>
            <div>{activeComponent === "team" && <p>Team</p>}</div>
            <div
              className={styles.icon}
              onClick={() => handleSettings("settings")}
            >
              <i class="bi bi-gear"></i>
            </div>
            <div>{activeComponent === "settings" && <p>Settings</p>} </div>
          </div>
          <div style={{ marginTop: "200px" }}>
            <Profile></Profile>
          </div>
        </div>
      </aside>
      {activeComponent === "home" && (
        <div className={styles.home}>
          <Home></Home>
        </div>
      )}
      {activeComponent === "contact" && (
        <div className={styles.ContactCenter}>
          <ContactCenter></ContactCenter>
        </div>
      )}
      {activeComponent === "analytics" && (
        <div className={styles.analytics}>
          <Analytics></Analytics>
        </div>
      )}
      {activeComponent === "bot" && (
        <div className={styles.bot}>
          <Bot></Bot>
        </div>
      )}

      {activeComponent === "team" && (
        <div className={styles.team}>
          <Team></Team>
        </div>
      )}
      {activeComponent === "settings" && (
        <div className={styles.settings}>
          <Settings></Settings>
        </div>
      )}
    </div>
  );
};

export default Main;
