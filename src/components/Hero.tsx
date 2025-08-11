import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-barber.jpg';
import shopInterior from '@/assets/barbershop-interior.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div 
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
          </div>
          <div 
            className="bg-cover bg-center relative hidden md:block"
            style={{ backgroundImage: `url(${shopInterior})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-background/80 to-background/40"></div>
          </div>
        </div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 triangle-pattern"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 triangle-pattern"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 triangle-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center items-center space-x-3 mb-8 animate-fade-scale">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-primary rotate-45"></div>
              <div className="w-4 h-4 bg-primary rotate-45"></div>
            </div>
            <span className="font-script text-5xl md:text-6xl font-bold text-primary">trim-it</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-primary rotate-45"></div>
              <div className="w-4 h-4 bg-primary rotate-45"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-impact text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-slide-up">
            BARBER
            <br />
            SHOP
          </h1>

          {/* Services List */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">Specializing in:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                'Low Taper Faded Waves',
                'Low Fade',
                'Afro Low Taper Fade', 
                'Shave and Regular Cut'
              ].map((service, index) => (
                <div key={index} className="bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-3">
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-xl px-12 py-6">
              WE ARE OPEN
            </Button>
            <a 
              href="tel:416-999-2524"
              className="group"
            >
              <Button variant="outline-light" size="lg" className="text-xl px-8 py-6 flex items-center space-x-3">
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <div className="text-left">
                  <div className="text-sm font-normal">CALL NOW:</div>
                  <div className="font-bold">416-999-2524</div>
                </div>
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Downtown Toronto</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Mon-Sat 9AM-8PM</span>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="font-impact text-2xl md:text-4xl tracking-widest text-primary">
              GET FRESH, STAY FRESH
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;