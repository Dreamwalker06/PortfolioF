import React, { useState, useEffect } from 'react';
import './scrollToTop.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 50; // Valeur de défilement à partir de laquelle le bouton sera affiché

    setIsVisible(scrollPosition > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={scrollToTop} className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
     
    </button>
  );
};

export default ScrollToTop;
