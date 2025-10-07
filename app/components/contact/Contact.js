// components/Contact.js

"use client";
import { useState } from 'react';
import styles from './Contact.module.css'; // Import the CSS Module
import { FiMail, FiPhone, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('');
      }, 2000);
    } else {
      setStatus('error');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus('');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <p className={styles.tagline}>GET IN TOUCH</p>
            <h1 className={styles.title}>
              Let's create something<br />beautiful together
            </h1>
          </div>

          <p className={styles.intro}>
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <div className={styles.actions}>
            <button onClick={openModal} className={`${styles.button} ${styles.primaryButton}`}>
              <FiMail />
              <span>Send me a message</span>
            </button>
            <a
              href="https://www.linkedin.com/in/durgeshap" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              <FaLinkedin />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <a href="https://github.com/Durgesh3805" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a href="mailto:durgesh3805@gmail.com" className={styles.footerLink}>
              <FiMail size={20} />
              <span>Email</span>
            </a>
            <a href="tel:+919353250245" className={styles.footerLink}>
              <FiPhone size={20} />
              <span>Phone</span>
            </a>
          </div>
        </footer>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={closeModal} className={styles.closeButton}>
              <FiX size={24} />
            </button>

            <h2>Get in Touch</h2>
            <p>Send me a message and I'll get back to you as soon as possible.</p>
            
            {status === 'success' ? (
                <div className={styles.success}>Message sent successfully!</div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" name="name" placeholder="your name" required className={styles.input} value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" placeholder="your.email@example.com" required className={styles.input} value={formData.email} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="What's this about?" required className={styles.input} value={formData.subject} onChange={handleInputChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell me about your project or question..." required className={styles.textarea} value={formData.message} onChange={handleInputChange}></textarea>
                    </div>
                    <div className={styles.formActions}>
                        <button type="button" onClick={closeModal} className={`${styles.button} ${styles.secondaryButton}`}>Cancel</button>
                        <button type="submit" disabled={status === 'sending'} className={`${styles.button} ${styles.primaryButton}`}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                    {status === 'error' && <p className={`${styles.statusMessage} ${styles.error}`}>Failed to send message. Please try again.</p>}
                </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;