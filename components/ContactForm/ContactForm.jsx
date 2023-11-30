// pages/contact.js
import { useState } from "react";
import styles from "../ContactForm/ContactForm.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <section className={styles.textFoto}>
        <section>
          <p className={styles.how}>How can we help you?</p>
          <h1 className={styles.header}>Contact Us</h1>

          <p className={styles.text}>
            We’re here to help and answer any questions you might have. We look
            forward to hearing from you!
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <img
                className={styles.telIcoon}
                src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/10/Pin-2.svg"
                alt="Adres icoontje"
              />{" "}
              Den Haag
            </li>
            <li className={styles.li}>
              <img
                className={styles.telIcoon}
                src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/10/Phone-2.svg"
                alt="telefoon icoontje"
              />{" "}
              06 8212217
            </li>
            <li className={styles.li}>
              <img
                className={styles.telIcoon}
                src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/10/Mail.svg"
                alt="Mail icoontje"
              />{" "}
              <a href="mailto:recipient@example.com">Code@gmail.com</a>
            </li>
          </ul>
        </section>
        <section>
          <img
            className={styles.foto}
            height="250"
            src="https://t3.ftcdn.net/jpg/03/02/27/32/360_F_302273261_kQtcpnm4dxTxMplP8wbdIKGPYgThOKJy.jpg"
            alt="Man met telefoon"
          />{" "}
        </section>
      </section>
    </div>
  );
}
