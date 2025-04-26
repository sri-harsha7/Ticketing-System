import React from "react";
import styles from "./Home.module.css";
import profile from "../../assets/profile.png";

const Home = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className={styles.home}>
        <h4>Dashboard</h4>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search for ticket"
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.tickets}>
          <p>All Tickets</p>
          <p>Resolved</p>
          <p>Unresolved</p>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticketInfo}>
            <div className={styles.ticketId}>
              <p>Ticket# 2023-00123</p>
              <p>Posted at 12:45 AM</p>
            </div>
            <div className={styles.ticketTime}>
              <p>Hey!</p>
              <p>10:00</p>
            </div>
          </div>
          <div className={styles.from}>
            <div className={styles.profile}>
              <div>
                <img src={profile} alt="" />
              </div>
              <div className={styles.profileInfo}>
                <h5>John Snow</h5>
                <p>+91-0000000000</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div>
              <p className={styles.open}>Open Ticket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
