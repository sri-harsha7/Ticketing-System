import React from "react";
import styles from "./SignUp.module.css";
import employee from "../../assets/employee.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const auth = () => {
    navigate("/main");
  };

  return (
    <div className={styles.SignUp}>
      <div className={styles.right}>
        <div className={styles.top}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
        <div className={styles.form}>
          <form action="">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginBottom: "25px" }}>Create an account</h1>
              <Link to="/login">
                <p>Sign in Instead</p>
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="username" style={{ paddingBottom: "10px" }}>
                FirstName :
              </label>
              <input type="text" name="firstname" />
            </div>
            <div>
              <label htmlFor="username" style={{ paddingBottom: "10px" }}>
                LastName :
              </label>
              <input type="text" name="lastname" />
            </div>
            <div>
              <label htmlFor="email" style={{ paddingBottom: "10px" }}>
                Email :
              </label>
              <input type="text" name="email" />
            </div>
            <div>
              <label htmlFor="password" style={{ paddingBottom: "10px" }}>
                Password :
              </label>
              <input type="text" name="password" />
            </div>

            <div>
              <label
                htmlFor="confirmpassword"
                style={{ paddingBottom: "10px" }}
              >
                Confirm Password :
              </label>
              <input type="password" name="confirmpassword" />
            </div>
            <div className={styles.checkbox}>
              <p>
                <span>
                  <input type="checkbox" />
                </span>
                By creating an account, I agree to our
                <span>Terms of use</span> and <span>Privacy Policy</span>
              </p>
            </div>
            <div>
              <button className={styles.button} onClick={auth}>
                Sign Up
              </button>
            </div>
          </form>
          <div className={styles.bottom}>
            <div>
              <p>
                This site is protected by reCAPTCHA and the
                <span>
                  <a> Google Privacy Policy </a>
                </span>
                and
                <span>
                  <a> Terms of Service </a>
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

export default SignUp;
