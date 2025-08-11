import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Zap, Sparkles, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Premium Haircuts",
      description: "Expert styling with precision cutting techniques",
      features: ["Consultation", "Wash & Cut", "Style Finish"],
      price: "$35",
      popular: false
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Fade Specialists",
      description: "Low fades, high fades, and everything in between",
      features: ["Low Taper Fade", "High Fade", "Burst Fade", "Skin Fade"],
      price: "$40",
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Beard & Mustache",
      description: "Professional grooming and shaping services",
      features: ["Beard Trim", "Mustache Shape", "Hot Towel Treatment"],
      price: "$25",
      popular: false
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "The Full Experience",
      description: "Complete grooming package for the modern gentleman",
      features: ["Cut & Style", "Beard Trim", "Hot Towel Shave", "Head Massage"],
      price: "$65",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-6xl text-foreground mb-4">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional barbering services crafted with precision and style. 
            Each service includes a consultation to ensure the perfect look for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                service.popular ? 'border-primary shadow-lg' : 'border-border'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 rounded-full w-fit ${
                  service.popular ? 'bg-primary text-primary-foreground' : 'bg-surface-variant text-primary'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button variant="cta" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Walk-ins Welcome</h3>
            <p className="text-muted-foreground mb-6">
              Can't book ahead? No problem! We accept walk-ins throughout the day. 
              However, appointments are recommended for guaranteed service times.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Book Your Appointment
              </Button>
              <span className="text-muted-foreground">or call</span>
              <a href="tel:416-999-2524">
                <Button variant="outline-light">
                  416-999-2524
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;