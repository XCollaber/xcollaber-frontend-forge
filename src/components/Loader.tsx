
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className={`loader ${isVisible ? '' : 'fade-out'}`}>
      <div className="loader-content">
        <div className="spinner"></div>
        <div className="gradient-text text-2xl font-bold">XCollaber</div>
      </div>
    </div>
  );
};

export default Loader;
