import React from 'react';
import Image from 'next/image';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { Users, Clock, Star, Coffee } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "All You Can Eat",
      description: "Indulge in an endless feast of aromatic curries, sizzling starters, and divine desserts.",
      image: "/assets/buffet.png",
      icon: <Users size={24} />,
      size: "large",
      accent: "var(--primary)"
    },
    {
      title: "Happy Hour",
      description: "Enjoy special discounts on our most popular snacks and refreshing beverages.",
      image: "", // We can use a generated image or a solid gradient with an icon
      icon: <Clock size={24} />,
      size: "small",
      accent: "var(--secondary)"
    },
    {
      title: "Rooms & Banquet",
      description: "30+ years of hospitality excellence. Perfect for grand weddings, functions, and comfortable stays in Ballia.",
      image: "/assets/private-dining.png",
      icon: <Star size={24} />,
      size: "medium",
      accent: "#9b59b6"
    },
    {
        title: "Mocktail Magic",
        description: "From Blue Lagoon to Mint Mojitos, our refreshing drinks are the perfect companion for your meal.",
        image: "",
        icon: <Coffee size={24} />, // I'll use a glass icon if available, but for now reuse or replace
        size: "small",
        accent: "var(--accent)"
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
            <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Beyond Just <span className="gradient-text">Dining</span>
            </motion.h2>
            <motion.p 
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                We provide a comprehensive experience designed to satisfy every craving and occasion.
            </motion.p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className={`${styles.card} ${styles[feature.size]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {feature.image ? (
                <div className={styles.imageWrapper}>
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image} 
                  />
                  <div className={styles.imageOverlay} />
                </div>
              ) : (
                <div className={styles.gradientBg} style={{ background: `linear-gradient(135deg, ${feature.accent}, #0a0a0a)` }} />
              )}
              
              <div className={styles.cardContent}>
                <div className={styles.iconBox} style={{ color: feature.accent }}>
                    {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
