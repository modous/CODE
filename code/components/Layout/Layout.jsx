import styles from "./Layout.module.css";
import Link from "next/link";
import DropDownMenu from "@/components/DropDownButton/DropDownMenu";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <Link href="/">
          <img
            className={styles.Logo}
            width="100"
            height="50"
            src="/CodeBlack.png"
            alt="Code logo"
          />
        </Link>

        <DropDownMenu />
      </header>
      <main>{children}</main>
      <footer>
        <a href="https://zakka.dev" target="__blank">
          My homepage
        </a>
      </footer>
    </>
  );
}
