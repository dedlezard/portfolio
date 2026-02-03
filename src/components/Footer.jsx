import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="prompt">$</span> dedlezard@portfolio
            </h3>
            <p className="footer-tagline">
              Full-stack developer building the future, one line of code at a time
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/dedlezard" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://instagram.com/dedlezard" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/dedlezard" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
              <li><a href="mailto:mvalid.cebe275@gmail.com">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Status</h4>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Available for projects</span>
            </div>
            <p className="status-text">
              Open to collaboration and consulting opportunities
            </p>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="copyright">
            <span className="copyright-symbol">©</span> {currentYear} dedlezard. Yes thats me.
          </div>
          <div className="footer-tech">
            Built with <span className="heart">♥</span> 
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
