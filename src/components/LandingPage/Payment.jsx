import styles from "./Payment.module.css";
const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentHeadings}>
        <h1>We have plans for everyone!</h1>
        <p>
          We started with a strong foundation, then simply built all of the
          sales and marketing tools ALL businesses need under one platform.
        </p>
      </div>
      <div className={styles.paymentPlans}>
        <div className={styles.plan}>
          <div style={{ background: "none" }}>
            <h1
              style={{
                marginBottom: "10px",
              }}
            >
              STARTER
            </h1>
            <p>
              Best for local businesses needing to improve their online
              reputation.
            </p>
          </div>
          <div style={{ background: "none" }}>
            <div style={{ marginTop: "40px", background: "none" }}>
              <p
                style={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  color: "#3A7ABD",
                  background: "none",
                }}
              >
                $199
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "lighter",
                    color: "#98A8B3",
                    background: "none",
                  }}
                >
                  /monthly
                </span>
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#30404D",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                What’s included
              </p>
              <ul className={styles.list}>
                <li>Unlimited Users</li>
                <li>GMB Messaging</li>
                <li>Reputation Management</li>
                <li>GMB Call Tracking</li>
                <li>24/7 Award Winning Support</li>
              </ul>
            </div>
          </div>
          <div>
            <button className={styles.button}>SIGN UP FOR STARTER</button>
          </div>
        </div>
        <div className={styles.plan}>
          <div>
            <h1
              style={{
                marginBottom: "10px",
              }}
            >
              GROW
            </h1>
            <p>
              Best for all businesses that want to take full control of their
              marketing automation and track their leads, click to close.
            </p>
          </div>
          <div>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontSize: "44px",
                  fontWeight: "bold",
                  color: "#3A7ABD",
                  background: "none",
                }}
              >
                $399
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "lighter",
                    color: "#98A8B3",
                    background: "none",
                  }}
                >
                  /monthly
                </span>
              </p>
            </div>
            <div style={{ background: "none" }}>
              <p
                style={{
                  color: "#30404D",
                  fontWeight: "bold",
                  marginTop: "40px",
                  background: "none",
                }}
              >
                What’s included
              </p>
              <ul className={styles.list}>
                <li>Pipeline Management</li>
                <li>Marketing Automation Campaigns</li>
                <li>Live Call Transfer</li>
                <li>GMB Messaging</li>
                <li>Embed-able Form Builder</li>
                <li>Reputation Management</li>
                <li>24/7 Award Winning Support</li>
              </ul>
            </div>
          </div>
          <div>
            <button className={styles.button}>SIGN UP FOR STARTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
