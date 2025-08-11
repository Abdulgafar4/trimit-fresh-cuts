import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
