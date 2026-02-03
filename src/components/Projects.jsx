import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Inventory Management System",
      description: "inventory management app for warehouses and factories that tracks stock levels, item movements, and receipts, with PDF receipt generation and date-based tracking.",
      moreDetails: "Features: real‑time inventory synchronization, receipts managment, PDF receipt generation, date‑based tracking, and user roles for staff management. Test account: test@test.com - password: testpass",
      image: "/assets/invManager.webp",
      tech: ["React", "Node.js", "Firebase", "Stripe"],
      category: "Web Application",
      link: "https://afko-inventory.web.app/"
    },
    {
      id: 2,
      title: "QR Ordering — Direct Orders to Kitchen",
      description: "A contactless QR ordering system that lets diners place orders from their phones, routing orders directly to the kitchen in real time with faster service and reduced staff workload.",
      moreDetails: "Designed for restaurants to reduce wait times: scan QR, browse menu, place order, and send it immediately to kitchen displays with order tracking and menu management. (Work in progress)",
      image: "/assets/loading.webp",
      tech: ["React", "Node.js", "Supabase", "Vite"],
      category: "Web Application",
      link: "#"
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description: "A React-based admin dashboard for managing users and orders, with role-based access, real-time analytics, detailed system monitoring, reporting tools, and operational insights.",
      moreDetails: "Provides role‑based access, live charts, user management, and detailed activity logs to help admins maintain system performance.",
      image: "/assets/adminDashboard.webp",
      tech: ["React", "Typescript", "Redux", "Node.js"],
      category: "Dashboard",
      link: "https://sav-admin-dashboard.web.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 30 }
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
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
            projects
            <span className="tag-symbol">{'/>'}</span>
          </div>
          <h2 className="section-title">
            Featured <span className="title-highlight">Projects</span>
          </h2>
          <p className="section-description">
            Web and mobile applications I've built with modern technologies
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="card-category">{project.category}</div>
                <div className="card-number">#{project.id.toString().padStart(2, '0')}</div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="project-link "
                onClick={() => openModal(project)}
              >
                <span className="link-text">View Project</span>
                <span className="link-arrow">→</span>
              </button>

              <div className="card-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>

                <div className="modal-header">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-category">{selectedProject.category} • {selectedProject.tech.join(', ')}</p>
                </div>

                <div className="modal-body">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                  <div className="modal-details">
                    <p>{selectedProject.moreDetails}</p>
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="view-project-btn">Live View</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="view-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/dedlezard" target="_blank" rel="noreferrer" className="view-more-btn">
            <span className="btn-icon">{'>'}</span>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
