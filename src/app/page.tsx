"use client";

import React, { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PureVegInterlude from "@/components/PureVegInterlude";
import Features from "@/components/Features";
import MenuHighlights from "@/components/MenuHighlights";
import BookingSection from "@/components/BookingSection";
import InteractiveFood3D from "@/components/InteractiveFood3D";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 1,
    restDelta: 0.0001
  });
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (v) => setProgress(v));
  }, [smoothProgress]);

  return (
    <main style={{ position: 'relative', background: 'transparent' }}>
      <InteractiveFood3D progress={progress} />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <PureVegInterlude />
        <Features />
        <MenuHighlights />
        <BookingSection />
        <ContactHub />
        <Footer />
      </div>
    </main>
  );
}
