import logo from "../../assets/logoSmall.png";
import styles from "./Main.module.css";
import Home from "./Home";
import ContactCenter from "./ContactCenter";
import Analytics from "./Analytics";
import Bot from "./Bot";
import Team from "./Team";
import Settings from "./Settings";
import { useState } from "react";

const Main = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      fullName: "John Doe",
      phoneNumber: "+1(000) 000-0000",
      email: "example@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      fullName: "Aswathama",
      phoneNumber: "+1(000) 000-0000",
      email: "sriharshabasavala@gmail.com",
      role: "Member",
    },
  ]);

  const addNewMember = (newMember) => {
    const memberToAdd = {
      id: Date.now(),
      fullName: newMember.username,
      phoneNumber: "+1(000) 000-0000",
      email: newMember.email,
      role: newMember.designation === "admin" ? "Admin" : "Member",
    };

    setTeamMembers([...teamMembers, memberToAdd]);
  };

  const deleteMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
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
            <div
              className={styles.icon}
              onClick={() => handleComponentClick("home")}
            >
              <i className="bi bi-house-door"></i>
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
              onClick={() => handleComponentClick("contact")}
            >
              <i className="bi bi-chat-left-text"></i>
            </div>
            <div>{activeComponent === "contact" && <p>Contact Center</p>}</div>
            <div
              className={styles.icon}
              onClick={() => handleComponentClick("analytics")}
            >
              <i className="bi bi-bar-chart"></i>
            </div>
            <div>{activeComponent === "analytics" && <p>Analytics</p>}</div>

            <div
              className={styles.icon}
              onClick={() => handleComponentClick("bot")}
            >
              <i className="bi bi-robot"></i>
            </div>
            <div>{activeComponent === "bot" && <p>Bot</p>}</div>
            <div
              className={styles.icon}
              onClick={() => handleComponentClick("team")}
            >
              <i className="bi bi-people-fill"></i>
            </div>
            <div>{activeComponent === "team" && <p>Team</p>}</div>
            <div
              className={styles.icon}
              onClick={() => handleComponentClick("settings")}
            >
              <i className="bi bi-gear"></i>
            </div>
            <div>{activeComponent === "settings" && <p>Settings</p>} </div>
          </div>
          <div className={styles.icon} style={{ marginTop: "200px" }}>
            <i class="bi bi-person-circle"></i>
          </div>
          <div>
            <p>Profile</p>
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
          <ContactCenter teamMembers={teamMembers}></ContactCenter>
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
          <Team
            teamMembers={teamMembers}
            onAddMember={addNewMember}
            onDeleteMember={deleteMember}
          />
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
