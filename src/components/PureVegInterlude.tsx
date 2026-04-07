import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './PureVegInterlude.module.css';

const PureVegInterlude: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animations: Reveal -> Circle Motion -> Disappear
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 0, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 0.8, 1], [0.5, 1, 1.5, 2]);

  return (
    <section ref={containerRef} className={styles.section}>
      <motion.div 
        className={styles.container}
        style={{ opacity, scale }}
      >
        {/* Animated Circle Ring */}
        <motion.div 
          className={styles.ring}
          style={{ rotate, scale: ringScale }}
        />
        
        {/* The Text */}
        <div className={styles.textWrapper}>
          <motion.h2 className={styles.title}>
            100% <span className={styles.highlight}>PURE VEG</span>
          </motion.h2>
          <motion.p className={styles.subtitle}>
            A Legacy of Natural Ingredients
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default PureVegInterlude;
