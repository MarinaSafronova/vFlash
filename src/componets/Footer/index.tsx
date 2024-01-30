import { Link } from "react-router-dom";
import Social from "../Social";
import styles from "./Footer.module.css";
import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className="social">
            <Social />
          </div>
          <div className={styles.nav}>
            <nav>
              <ul className={styles.flex}>
                <li>All Rights Reserved</li>
                <li>
                  <a href="#about">Terms and Conditions </a>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
