import React from "react";
import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.heading}>
        <h2>Analytics</h2>
      </div>
      <div>
        <div className={styles.averageReplyTime}>
          <h1>Average Reply Time</h1>
          <p>
            For highest customer satisfaction rates you should aim to reply to
            an incoming customer's message in 15 seconds or less. Quick
            responses will get you more conversations, help you earn customers
            trust and make more sales.
          </p>
        </div>

        <div className={styles.resolvedTickets}>
          <h1>Resolved Tickets</h1>
          <p className={styles.infoText}>
            A callback system on a website, as well as proactive invitations,
            help to attract even more customers. A separate round button for
            ordering a call with a small animation helps to motivate more
            customers to make calls.
          </p>
        </div>
        <div className={styles.totalChats}>
          <h1>Total Chats</h1>
          <p>
            This metric Shows the total number of chats for all Channels for the
            selected the selected period
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
