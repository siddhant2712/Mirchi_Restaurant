import React from 'react';
import Image from 'next/image';
import styles from './BookingSection.module.css';
import { motion } from 'framer-motion';
import { Hotel, PartyPopper, PhoneCall, CheckCircle } from 'lucide-react';

const BookingSection: React.FC = () => {
  const features = [
    {
        icon: <PartyPopper size={24} />,
        title: "Grand Banquet Hall",
        desc: "Ideal for weddings, birthdays, and corporate events with 200+ capacity."
    },
    {
        icon: <Hotel size={24} />,
        title: "Luxury AC Rooms",
        desc: "Modern amenities and premium comfort for your stay in Ballia."
    },
    {
        icon: <CheckCircle size={24} />,
        title: "30+ Years Experience",
        desc: "Legacy of hosting unforgettable celebrations with meticulous care."
    }
  ];

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Visual Content */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageCard}>
              <Image 
                src="/assets/private-dining.png" 
                alt="Banquet Hall Interior" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.years}>30+</span>
                <span className={styles.expText}>Years of<br/>Legacy</span>
              </div>
            </div>
            {/* Decoration Elements */}
            <div className={styles.decoration1} />
            <div className={styles.decoration2} />
          </motion.div>

          {/* Text Content */}
          <div className={styles.content}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>Celebrate & <span className="gradient-text">Stay</span></h2>
                <p className={styles.subtitle}>
                  From grand weddings to comfortable overnight stays, Mirchi Restaurant & Hotel 
                  is Ballia's premier destination for hospitality. 
                </p>
            </motion.div>

            <div className={styles.featureList}>
              {features.map((f, i) => (
                <motion.div 
                    key={f.title} 
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className={styles.iconBox}>{f.icon}</div>
                    <div>
                        <h4 className={styles.fTitle}>{f.title}</h4>
                        <p className={styles.fDesc}>{f.desc}</p>
                    </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
                className={styles.ctaBox}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className={styles.helplineLabel}>Direct Booking Helpline</div>
                <a href="tel:+919214234342" className={styles.bookBtn}>
                    <PhoneCall size={20} />
                    <span>+91 92 142 34342</span>
                </a>
                <p className={styles.availability}>* Available 24/7 for Room Reservations</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
