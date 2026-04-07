import React, { useState } from 'react';
import styles from './MenuHighlights.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Utensils, Coffee, Leaf } from 'lucide-react';

const categories = [
  {
    id: 'starters',
    name: 'Starters',
    icon: <Flame size={20} />,
    items: ['Paneer Tikka Dry', 'Veg Seekh Kabab', 'Hara Bhara Kabab', 'Soya Chaap', 'Honey Potato Chilly', 'Veg Manchurian Dry']
  },
  {
    id: 'main',
    name: 'Main Course',
    icon: <Utensils size={20} />,
    items: ['Mirchi Special Paneer', 'Paneer Butter Masala', 'Paneer Kadahi', 'Mushroom Masala', 'Dal Makhani', 'Mix Veg']
  },
  {
    id: 'south',
    name: 'South Indian',
    icon: <Leaf size={20} />,
    items: ['Masala Dosa', 'Paneer Dosa', 'Onion Rava Masala Dosa', 'Paneer Uttapam']
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    icon: <Coffee size={20} />,
    items: ['Mint Mojito', 'Blue Lagoon', 'Pina Colada', 'Orange Dip', 'Strawberry Shake']
  }
];

const MenuHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState('starters');

  return (
    <section id="menu" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Signature</span> Menu
          </motion.h2>
          <p className={styles.subtitle}>Pure Veg Delicacies Crafted with Passion</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span className={styles.tabName}>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className={styles.menuBox}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.itemGrid}
            >
              {categories.find(c => c.id === activeTab)?.items.map((item, idx) => (
                <div key={item} className={styles.item}>
                  <div className={styles.itemDot} />
                  <span className={styles.itemName}>{item}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.note}>
          * Pricing and availability are subject to change. Visit us for the complete menu experience.
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
