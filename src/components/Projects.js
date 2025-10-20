import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Morva labs',
      category: 'Visual design, Branding',
      description: 'A comprehensive visual identity and branding project for an innovative tech laboratory.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Rectangle',
      category: 'Product design, Icon design',
      description: 'Modern product design with custom iconography for a cutting-edge software platform.',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Simply',
      category: 'Landing page, Illustration design',
      description: 'Clean and minimal landing page design with custom illustrations and smooth interactions.',
      image: '/api/placeholder/400/300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="view-all-btn"
          >
            View All
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon"></div>
                    <span>{project.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="project-link"
                >
                  View Project
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
