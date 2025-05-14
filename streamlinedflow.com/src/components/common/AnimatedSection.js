'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function AnimatedSection({ 
  children, 
  type = 'fadeIn', 
  delay = 0,
  scrollTriggered = false,
  className = ''
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const animation = animations[type];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={scrollTriggered ? (inView ? "visible" : "hidden") : "visible"}
      variants={animation}
      transition={{ 
        duration: scrollTriggered ? 0.8 : 0.5, 
        delay: scrollTriggered ? 0.2 : delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 