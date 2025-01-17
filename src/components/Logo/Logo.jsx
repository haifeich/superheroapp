import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.wrapper}>
      SuperHero
    </Link>
  );
}

export default Logo;
