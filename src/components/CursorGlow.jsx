import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
      animate={{
        background: isVisible
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.08), transparent 40%)`
          : 'transparent',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
    />
  );
}
