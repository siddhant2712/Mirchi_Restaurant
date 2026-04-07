import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.fireEmoji}>⭐</span>
          <span className={styles.badgeText}>30+ Years of Excellence</span>
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Heart of <br />
          <span className={styles.gradientText}>Indian Flavors</span>
        </motion.h1>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Serving authentic <strong>Pure Veg</strong> flavors since 2025. From sizzling tandooris to aromatic biryanis, 
          Mirchi Restaurant & Hotel brings you the finest culinary secrets of Uttar Pradesh.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.orderButtons}>
            <a href="https://www.swiggy.com/city/ballia/mirchi-restaurant-piparpati-piparpati-rest1171525?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" className={styles.swiggyBtn}>
              <ShoppingBag size={20} />
              <span>Order on Swiggy</span>
            </a>
            <a href="https://www.zomato.com/ballia/mirchi-restaurant-ballia-locality/order?v=o2" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className={styles.zomatoBtn}>
              <ShoppingBag size={20} />
              <span>Order on Zomato</span>
            </a>
          </div>
          
          <a href="#menu" className={styles.viewMenu}>
            <span>View Full Menu</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Rating Badge */}
        <motion.div 
          className={styles.rating}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className={styles.stars}>★★★★☆</div>
          <p>4.1 (219+ Happy Reviews)</p>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        className={styles.scrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
