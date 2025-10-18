'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import styles from './page.module.scss';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>GET IN TOUCH</h1>
          <p>We'd love to hear from you</p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.info}>
                <h2>Contact Information</h2>
                <p className={styles.intro}>
                  Have a question? We're here to help. Reach out to our team 
                  and we'll get back to you as soon as possible.
                </p>

                <div className={styles.contactMethods}>
                  <div className={styles.method}>
                    <FiMail />
                    <div>
                      <strong>Email</strong>
                      <p>hello@luxenoir.com</p>
                    </div>
                  </div>

                  <div className={styles.method}>
                    <FiPhone />
                    <div>
                      <strong>Phone</strong>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className={styles.method}>
                    <FiMapPin />
                    <div>
                      <strong>Address</strong>
                      <p>123 Luxury Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className={styles.method}>
                    <FiClock />
                    <div>
                      <strong>Business Hours</strong>
                      <p>Monday - Friday: 9AM - 6PM EST<br />
                      Saturday: 10AM - 4PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
