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
      <h1>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Naam:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Naam"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Bericht:
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Typ hier je bericht"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.formTextarea}
          ></textarea>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
