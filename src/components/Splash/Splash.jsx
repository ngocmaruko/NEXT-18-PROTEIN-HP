import React, { useEffect, useState } from 'react';
import './Splash.css';
import next18 from '../../assets/next-18.png'; // Adjust the path as necessary
import protein from '../../assets/protein.png'; // Adjust the path as necessary

const Splash = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Show the main content after the splash screen animation
    }, 2000); // Adjust this to match the total animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`splash-container ${showContent ? 'hidden' : ''}`}>
        <div className="image-container">
          <img src={next18} alt="NEXT-18" className="image-left" />
          <img src={protein} alt="PROTEIN" className="image-right" />
        </div>
      </div>
      <div className={`content ${showContent ? 'show-content' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default Splash;
