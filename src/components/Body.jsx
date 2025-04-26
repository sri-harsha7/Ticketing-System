import styles from "./Body.module.css";
import Landing from "./LandingPage/Landing";
const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.landing}>
        <Landing></Landing>
      </div>
    </div>
  );
};

export default Body;
