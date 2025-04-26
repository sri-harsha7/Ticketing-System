import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import social from "../../assets/socialIcons.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.image} />
      </div>
      <div className={styles.row1}>
        <div className={styles.product}>
          <ul>
            <li className={styles.heading}>Products</li>
            <li>
              <a href="/universalCheckout">Universal checkout</a>
            </li>
            <li>
              <a href="/paymentWorkflows">Payment workflows</a>
            </li>
            <li>
              <a href="/observability">Observability</a>
            </li>
            <li>
              <a href="/upliftAI">UpliftAI</a>
            </li>
            <li>
              <a href="/apps&integrations">Apps & integrations</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}>Resources</li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/successstories">Success stories</a>
            </li>
            <li>
              <a href="/newsroom">News room</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.row2}>
        <div>
          <ul>
            <li className={styles.heading}>Why Primer</li>
            <li>
              <a href="/newmarkets">Expand to new markets</a>
            </li>
            <li>
              <a href="/paymentsucess">Boost payment success</a>
            </li>
            <li>
              <a href="/coneversionrates">Improve conversion rates</a>
            </li>
            <li>
              <a href="/paymentsfraud">Reduce payments fraud</a>
            </li>
            <li>
              <a href="/recoverrevenue">Recover revenue</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.heading}>Company</li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.row3}>
        <div>
          <ul>
            <li className={styles.heading}>Developer</li>
            <li>
              <a href="/developers">Developers</a>
            </li>
            <li>
              <a href="/primerdocs">Primer Docs</a>
            </li>
            <li>
              <a href="/api">API Reference</a>
            </li>
            <li>
              <a href="/paymentmethods">Payment methods guide</a>
            </li>
            <li>
              <a href="/servicestatus">Service status</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <img src={social} alt="" className={styles.social} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
