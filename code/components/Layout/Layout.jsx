import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <img
          className={styles.Logo}
          width="100"
          height="50"
          src="/CodeBlack.png"
          alt="Code logo"
        />

        <nav>
          <ul className={styles.Navigatie}>
            <li className={styles.li}>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li className={styles.Login}>
            <a href="">Login</a>
            </li>
          </ul>

        
        </nav>
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
