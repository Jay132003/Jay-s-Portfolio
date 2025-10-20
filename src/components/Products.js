import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Portafo',
      subtitle: 'FRAMER TEMPLATE',
      description: 'A modern portfolio template built with Framer for designers and creatives.',
      image: '/api/placeholder/300/200',
      link: '#'
    },
    {
      id: 2,
      title: 'Faktur Invoice',
      subtitle: 'Framer template',
      description: 'Professional invoice template designed for modern businesses and freelancers.',
      image: '/api/placeholder/300/200',
      link: '#'
    },
    {
      id: 3,
      title: 'Goven',
      subtitle: 'FRAMER TEMPLATE',
      description: 'Government website template with clean design and accessibility in mind.',
      image: '/api/placeholder/300/200',
      link: '#'
    },
    {
      id: 4,
      title: 'Subtle Folio',
      subtitle: 'FRAMER TEMPLATE',
      description: 'Minimal portfolio template perfect for showcasing your creative work.',
      image: '/api/placeholder/300/200',
      link: '#'
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
    <section id="products" className="products-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Products</h2>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="product-image">
                <div className="product-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon"></div>
                    <span>{product.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-subtitle">{product.subtitle}</p>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <motion.a
                  href={product.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Template
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
