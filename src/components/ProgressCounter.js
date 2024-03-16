import React, { useState, useEffect } from "react";

const ScrollProgressCounter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const progress = (scrollPosition / (fullHeight - windowHeight)) * 100;

      setScrollProgress(progress);
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="scrollProgressCounter">
      <div className="scrollProgress" style={{ width: `${scrollProgress}%` }}>
        <span className="scrollProgress-text">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgressCounter;
