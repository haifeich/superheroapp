import { Link } from "react-router";
import Logo from "../Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Logo />
          <p className={styles.attribution}>
            Powercoders exercise created by{" "}
            <a href="https://www.linkedin.com/in/haifei-zhang-9b2562211/">
              Haifei Zhang
            </a>
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>General</h2>
          <ul className={styles.linkList}>
            <li>
              <Link to="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link to="/todo">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
