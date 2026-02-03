import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/TypeScript", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 },
        { name: "WebSockets", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 88 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 75 },
        { name: "Expo", level: 85 },
        { name: "Mobile UI/UX", level: 82 }
      ]
    },
    {
      title: "Databases & DevOps",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "Redis", level: 78 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 88 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
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
            skills
            <span className="tag-symbol">{'/>'}</span>
          </div>
          <h2 className="section-title">
            Technical <span className="title-highlight">Arsenal</span>
          </h2>
          <p className="section-description">
            Technologies and frameworks I use to build modern applications
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 + 0.3 }}
                      >
                        <div className="skill-glow"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
