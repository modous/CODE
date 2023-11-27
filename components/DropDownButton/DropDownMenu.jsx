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
    <div className={`${styles.surround_menu} ${isMenuVisible ? '' : styles.hidden}`}>
      <Button className={styles.Menu} onClick={toggleMenu}>
        Menu
      </Button>

      {isMenuVisible && (
        <nav className={styles.nav_bar}>
          <ul className={styles.Navigatie}>
            <li>
              <Link className={styles.nav_link} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} href="/new">
                Nieuw
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} href="/men">
                Heren
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} href="/women">
                Dames
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DropDownMenu;
