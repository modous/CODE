// pages/contact.js
import { useState } from "react";
import styles from "../ContactForm/ContactForm.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form, such as making API calls or sending emails.
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <p className={styles.how}>How can we help you?</p>
      <h1>Contact Us</h1>
      <p>
        We’re here to help and answer any questions you might have. We look
        forward to hearing from you!
      </p>

      <ul>
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
    </div>
  );
}
