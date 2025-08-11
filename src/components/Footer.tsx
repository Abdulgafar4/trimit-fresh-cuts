import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Premium Haircuts',
    'Fade Specialists', 
    'Beard & Mustache',
    'Hot Towel Shaves',
    'Hair Styling',
    'Consultations'
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-primary rotate-45"></div>
                <div className="w-4 h-4 bg-primary rotate-45"></div>
              </div>
              <span className="font-script text-3xl font-bold text-primary">trim-it</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Toronto's premier barbershop offering professional cuts, styling, and grooming services. 
              Get fresh, stay fresh.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-surface border border-border rounded-full hover:border-primary transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-surface border border-border rounded-full hover:border-primary transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Visit Us</p>
                  <p className="text-muted-foreground text-sm">123 King Street West</p>
                  <p className="text-muted-foreground text-sm">Toronto, ON M5H 1A1</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Call Us</p>
                  <a 
                    href="tel:416-999-2524"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    416-999-2524
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-8PM</p>
                  <p className="text-muted-foreground text-sm">Sat: 9AM-7PM</p>
                  <p className="text-muted-foreground text-sm">Sun: 11AM-5PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a 
                    href="mailto:info@trimithairboutique.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    info@trimithairboutique.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Your Best Look?</h3>
            <p className="text-muted-foreground mb-6">
              Book your appointment today and experience the Trim-It difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Book Now Online
              </Button>
              <span className="text-muted-foreground">or</span>
              <a href="tel:416-999-2524">
                <Button variant="cta" size="lg">
                  Call 416-999-2524
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Trim-It Barbershop. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;