import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Software Engineer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="matrix-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            01010101
          </div>
        ))}
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bracket">{'<'}</span>
            Hello, World!
            <span className="bracket">{'/>'}</span>
          </motion.div>

          <motion.h1
            className="name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm <span className="name-highlight">dedlezard</span>
            <span className="wave">👋</span>
          </motion.h1>

          <div className="typing-container">
            <span className="prompt-symbol">{'>'}</span>
            <span className="typed-text">{text}</span>
            <span className="typing-cursor">|</span>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Building scalable web and mobile applications with modern technologies.
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
          >
            <a href="#projects" className="btn-primary">
              <span className="btn-icon">{'~/>'}</span>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <span className="btn-icon">{'$'}</span>
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <div className="terminal-title">dedlezard@terminal:~</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span> ls -la skills/
              </div>
              <div className="terminal-output">
                drwxr-xr-x  frontend/<br/>
                drwxr-xr-x  backend/<br/>
                drwxr-xr-x  mobile/<br/>
                drwxr-xr-x  databases/<br/>
                drwxr-xr-x  devops/
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> cat status.txt
              </div>
              <div className="terminal-output">
                <span className="status-active">● ACTIVE</span> | Ready for new projects
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="typing-cursor-terminal">_</span>
              </div>
            </div>
          </div>

          <div className="floating-badges">
            <motion.div
              className="badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <span className="badge-icon">💻</span>
              Full-Stack Dev
            </motion.div>
            <motion.div
              className="badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="badge-icon">⚡</span>
              React Expert
            </motion.div>
            <motion.div
              className="badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              <span className="badge-icon">🚀</span>
              Fast Learner
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
