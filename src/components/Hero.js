import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy } from 'lucide-react';
import SpotifyPlaylist from './SpotifyPlaylist';
import './Hero.css';

const Hero = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('panchalj481@gmail.com');
    // You can add a toast notification here
    alert('Email copied to clipboard!');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Developer</span>
          </motion.div>

          <motion.div 
            className="availability-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="availability-dot"></span>
            AVAILABLE FOR WORK
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm Jay Panchal
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            With great powers come greate electricity bills. ⚡
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hire-me-btn"
            >
              <Mail size={20} />
              Hire Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyEmail}
              className="copy-email-btn"
            >
              <Copy size={20} />
              Copy Email
            </motion.button>
          </motion.div>

          {/* Spotify Playlist Component */}
          <SpotifyPlaylist />
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="hero-image-placeholder">
            <div className="naruto-image">
              <img src="/Naruto.jpg" alt="Naruto" className="naruto-img" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
