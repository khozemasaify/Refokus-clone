/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredColor, setHoveredColor] = useState('black');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Get the element beneath the cursor
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      // Get its computed background color
      const computedColor = window.getComputedStyle(hoveredElement).backgroundColor;

      // Set the color based on the computed background color
      setHoveredColor(computedColor);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="  absolute inset-0 pointer-events-none"
      style={{ filter:"revert-layer", color: hoveredColor }}
    ></div>
  );
};

export default MouseFollower;
