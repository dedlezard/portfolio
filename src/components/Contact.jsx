import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const myEmail = "mvalid.cebe275@gmail.com"; 

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_t83inii', 
          template_id: 'template_6f2d316', 
          user_id: 'JJRJhmGmFtJsvIo_N', 
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: myEmail,
          }
        })
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => {
          setShowModal(false);
          setSent(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
      } else {
        const errorText = await response.text();
  console.error('EmailJS error response:', errorText);
  throw new Error(errorText);
      }
    } catch (err) {
      setError('Failed to send email. Please try again or email me directly.');
      console.error('Email send error:', err);
    } finally {
      setSending(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="tag-symbol">{'<'}</span>
            contact
            <span className="tag-symbol">{'/>'}</span>
          </div>
          <h2 className="section-title">
            Get In <span className="title-highlight">Touch</span>
          </h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="email-display">
            <div className="email-box">
              <div className="email-label">Email me directly:</div>
              <div className="email-address">
                <span className="email-text">{myEmail}</span>
                <button 
                  className="copy-email-btn" 
                  onClick={copyEmail}
                  title="Copy email"
                >
                  {emailCopied ? '✓ Copied!' : '📋 Copy'}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>whatsapp</h3>
              <p>+905422299988</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📸</div>
              <h3>Instagram</h3>
              <p>@dedlezard</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🐦</div>
              <h3>X / Twitter</h3>
              <p>@dedlezard</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💻</div>
              <h3>GitHub</h3>
              <p>github.com/dedlezard</p>
            </div>

            
          </div>

          <div className="contact-actions">
            <motion.button
              className="btn-contact-secondary"
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-icon">📄</span>
              Request My CV
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Request My CV</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>

              <form className="email-form" onSubmit={handleSubmit}>
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={sending || sent}
                >
                  {sending ? 'Sending...' : sent ? '✓ Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
