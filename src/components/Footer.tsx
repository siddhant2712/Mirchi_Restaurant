import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { Phone, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logoRow}>
                            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
                            <span className={styles.brandName}>Mirchi</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Authentic <strong>Pure Veg</strong> flavors served with love since 2025. Experience the true taste of spice in the heart of Ballia.
                        </p>
                        <p className={styles.license}>
                            Food License No. 12724030000236
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>Quick Links</h4>
                        <div className={styles.linkGrid}>
                            <a href="#menu" className={styles.link}>Menu</a>
                            <a href="#features" className={styles.link}>Features</a>
                            <a href="#gallery" className={styles.link}>Gallery</a>
                            <a href="#contact" className={styles.link}>Contact</a>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <h4 className={styles.linkTitle}>Contact Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="tel:08354019620" className={styles.socialIcon}><Phone size={20} /></a>
                            <a href="mailto:contact@mirchihotel.com" className={styles.socialIcon}><Mail size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Globe size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Mirchi Restaurant & Hotel. All Rights Reserved.
                    </p>
                    <div className={styles.locationTag}>
                        Meena Bazar, Bahadurpur, Ballia (UP)
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
