import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValue.name || !formValue.email || !formValue.message) {
      setError(true);
    } else {
      setEmailSent(true);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setError(false);
    const { name, value } = e.target;
    setFormValue((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={styles.container} id="contact">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className={styles.content}
      >
        <h2>Contact Us</h2>
        <div className={styles.wrapper}>
          <div className={styles.contactTitle}>
            <p>
              Send us a message and we’ll get back to you as soon as possible.
              Looking forward to hearing from you!
            </p>
          </div>
          <div className={styles.contactForm}>
            {!emailSent ? (
              <form onSubmit={(e) => handleEmail(e)}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValue.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {error && !formValue.name && (
                    <div className={styles.error}>Please enter your name.</div>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValue.email}
                    onChange={(e) => handleChange(e)}
                  />
                  {error && !formValue.email && (
                    <div className={styles.error}>
                      Please enter your email address.
                    </div>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValue.message}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  {error && !formValue.message && (
                    <div className={styles.error}>
                      Please enter your message.
                    </div>
                  )}
                </div>
                <button>Send</button>
              </form>
            ) : (
              <div className={styles.thankyou}>
                Thank you for getting in touch, we always try our best to
                respond as soon as possible, you can expect a reply in at most
                48 hours.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
