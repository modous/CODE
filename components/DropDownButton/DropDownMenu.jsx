import styles from "./DropDownMenu.module.css";
import { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";

const DropDownMenu = () => {
  const [isMenuVisible, setMenuVisibility] = useState(true);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div
      className={`${styles.surround_menu} ${
        isMenuVisible ? "" : styles.hidden
      }`}
    >
      <Button className={styles.Menu} onClick={toggleMenu}>
        Menu
      </Button>

      {isMenuVisible && (
        <nav className={styles.nav_bar}>
          <ul className={styles.Navigatie}>
            <Link className={styles.nav_link} href="/">
              Home
            </Link>

            <Link className={styles.nav_link} href="/new">
              Nieuw
            </Link>

            <Link className={styles.nav_link} href="/about">
              About
            </Link>

            <Link className={styles.nav_link} href="/contact">
              Contact
            </Link>
            <li className={styles.loginButton}>
              <Link className={styles.nav_link} href="/login">
                Login
              </Link>
            </li>
            <Link className={styles.nav_link} href="/register">
              Register
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DropDownMenu;
