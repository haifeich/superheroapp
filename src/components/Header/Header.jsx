import { Sun } from "react-feather";
import Logo from "../Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />

      <div className={styles.actions}>
        {/* Todo: add Login logic */}
        <button className={styles.login}>Login</button>
        <button className={styles.action}>
          <Sun size="1.5rem" />
        </button>
      </div>
    </header>
  );
}

export default Header;
