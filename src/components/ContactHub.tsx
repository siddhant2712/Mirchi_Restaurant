import React from 'react';
import styles from './ContactHub.module.css';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactHub: React.FC = () => {
    const contacts = [
        {
            icon: <Phone size={28} />,
            label: "Booking Helpline",
            value: "+91 92142 34342",
            href: "tel:+919214234342",
            color: "var(--primary)"
        },
        {
            icon: <Phone size={28} />,
            label: "General Enquiry",
            value: "083540 19620",
            href: "tel:08354019620",
            color: "var(--primary)"
        },
        {
            icon: <MessageCircle size={28} />,
            label: "WhatsApp",
            value: "Chat with us",
            href: "https://wa.me/918354019620",
            color: "#25D366"
        },
        {
            icon: <MapPin size={28} />,
            label: "Visit Us",
            value: "Bahadurpur, Ballia",
            href: "https://maps.google.com/?q=Mirchi+Restaurant+Hotel+Meena+Bazar+Ballia",
            color: "var(--secondary)"
        }
    ];

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <motion.h2 
                            className={styles.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Get in <span className="gradient-text">Touch</span>
                        </motion.h2>
                        <motion.p 
                            className={styles.desc}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Whether you're planning a dinner or need home delivery, we're just a click away.
                        </motion.p>
                        
                        <div className={styles.hours}>
                            <Clock size={20} className={styles.clockIcon} />
                            <div>
                                <p className={styles.hourTitle}>Opening Hours</p>
                                <p className={styles.hourValue}>9:30 AM - 10:10 PM (Everyday)</p>
                            </div>
                        </div>

                        <div className={styles.address}>
                            <p className={styles.addressValue}>
                                Meena Bazar, Bahadurpur, Ballia,<br />
                                Uttar Pradesh 277001
                            </p>
                        </div>
                    </div>

                    <div className={styles.cards}>
                        {contacts.map((contact, index) => (
                            <motion.a 
                                key={contact.label}
                                href={contact.href}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ '--hover-color': contact.color } as any}
                            >
                                <div className={styles.iconBox} style={{ color: contact.color }}>
                                    {contact.icon}
                                </div>
                                <div className={styles.cardText}>
                                    <p className={styles.cardLabel}>{contact.label}</p>
                                    <p className={styles.cardValue}>{contact.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHub;
