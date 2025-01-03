// ContactUs.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles/ContactUs.module.css";
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(formData);

      const res = await axios.post('/api/contact', body, config);

      console.log(res.data); // Handle success response

      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err); // Handle error
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} className={styles.inputField} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" value={message} onChange={handleChange} className={styles.textareaField} required />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <div className={styles.address}>
        <h2 className={styles.addressTitle}>Contact Information</h2>
        <div className={styles.contactInfo}>
          <div>
            <h3>Call Us</h3>
            <p>8610 9029 15</p>
          </div>
          <div>
            <h3>Email Us</h3>
            <p>bestofoods@gmail.com</p>
          </div>
        </div>
        <div>
          <h3>Madurai</h3>
          <p>50,West masi street</p>
          <p>TamilNadu</p>
        </div>
        <div>
          <h3>Pondicherry</h3>
          <p>Suite 11, 1401 Botany Road</p>
          <p>Botany, NSW </p>
          <p>TamilNadu</p>
        </div>
        <Image src="/img/houseoutline.png" alt="House Outline" width="450" height="250" />
      </div>
    </div>
  );
};

export default ContactUs;
