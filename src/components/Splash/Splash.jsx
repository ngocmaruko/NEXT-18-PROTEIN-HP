import React, { useEffect, useState } from 'react';
import './Splash.css';

const Splash = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Show the main content after the splash screen animation
    }, 4500); // Duration of the splash screen animation (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="splash-container" style={{ opacity: showContent ? 0 : 1 }}>
        <div className="text-container">
          <div className="text-left">NEXT-18</div>
          <div className="text-right">PROTEIN</div>
        </div>
      </div>
      <div className={`content ${showContent ? 'show-content' : ''}`}>
        {/* Your main content here */}
        <h1>Welcome to the Main Content</h1>
      </div>
    </>
  );
};

export default Splash;
