import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`app ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <Hero isLightMode={isLightMode} />
      <Projects />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
