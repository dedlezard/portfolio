import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Code Commits", value: "5000+" },
    { label: "Years Coding", value: new Date().getFullYear() - 2019 + "+" },
  ];

  return (
    <section className="about" id="about">
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
            about
            <span className="tag-symbol">{'/>'}</span>
          </div>
          <h2 className="section-title">
            About <span className="title-highlight">Me</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-paragraph">
              I'm a full-stack software engineer who started coding at age 13. What began as curiosity 
              about how websites work evolved into a passion for <span className="highlight">building scalable applications</span> that 
              solve real-world problems.
            </p>
            
            <p className="about-paragraph">
              I specialize in <span className="highlight">React, Node.js, and React Native</span>, 
              creating seamless experiences across web and mobile platforms. From database design to 
              pixel-perfect frontends, I love every aspect of the development process.
            </p>

            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing what I've learned with the developer community.
            </p>

            <div className="expertise-areas">
              <h3 className="expertise-title">Areas of Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-icon">⚛️</span>
                  <span>React & Next.js</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">📱</span>
                  <span>React Native</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🔧</span>
                  <span>Node.js & Express</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🗄️</span>
                  <span>Database Design</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🎨</span>
                  <span>UI/UX Development</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🚀</span>
                  <span>Full-Stack Architecture</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="certifications">
              <h3 className="cert-title">Learning & Growth</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>Started coding at age 13</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>Self-taught developer</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>Continuous learner of new technologies</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✓</span>
                  <span>Open-source contributor</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
