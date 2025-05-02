import React from "react";
import styles from "./Login.module.css";
import employee from "../../assets/employee.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const auth = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/main/home"); // Navigate to the correct path
  };

  return (
    <div className={styles.login}>
      <div className={styles.right}>
        <div className={styles.top}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
        <div className={styles.form}>
          <form action="/main/home" method="post" onSubmit={auth}>
            <h1 style={{ marginBottom: "25px" }}>Sign in to your Plexify</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="username" style={{ paddingBottom: "10px" }}>
                Username :
              </label>
              <input type="text" name="username" required />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="password" style={{ paddingBottom: "10px" }}>
                Password :
              </label>
              <input type="password" name="password" required />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
          </form>
          <div className={styles.bottom}>
            <div>
              <p>
                Don't have an account?
                <span>
                  <Link to={"/signup"}>SignUp</Link>
                </span>
              </p>
            </div>
            <div
              style={{
                fontSize: "13px",
                fontFamily: "inter",
                position: "absolute",
                bottom: "10px",
                color: "grey",
              }}
            >
              <p>
                This site is protected by reCAPTCHA and the
                <span>
                  <a href="/privacy"> Google Privacy Policy </a>
                </span>
                and
                <span>
                  <a href="/terms"> Terms of Service </a>
                </span>
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <img src={employee} alt="employee image" className={styles.employee} />
      </div>
    </div>
  );
};

export default Login;
