import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 King Street West", "Toronto, ON M5H 1A1"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["416-999-2524"],
      action: "Call Now",
      href: "tel:416-999-2524"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: [
        "Mon-Fri: 9:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 7:00 PM", 
        "Sunday: 11:00 AM - 5:00 PM"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@trimithairboutique.com"],
      action: "Send Email",
      href: "mailto:info@trimithairboutique.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-6xl text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready for your best look yet? Contact us to book your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-surface/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-foreground font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-foreground font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-foreground font-medium mb-2 block">Email</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-foreground font-medium mb-2 block">Phone</label>
                <Input 
                  type="tel"
                  placeholder="(416) 123-4567"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-foreground font-medium mb-2 block">Service Interested In</label>
                <select className="w-full p-3 rounded-md bg-background border border-border focus:border-primary text-foreground">
                  <option value="">Select a service</option>
                  <option value="haircut">Premium Haircut</option>
                  <option value="fade">Fade Specialist</option>
                  <option value="beard">Beard & Mustache</option>
                  <option value="full">The Full Experience</option>
                </select>
              </div>
              
              <div>
                <label className="text-foreground font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about what you're looking for..."
                  rows={4}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-surface/30 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.action && (
                      <Button 
                        variant="outline-light" 
                        size="sm"
                        asChild={!!info.href}
                      >
                        {info.href ? (
                          <a href={info.href}>{info.action}</a>
                        ) : (
                          <span>{info.action}</span>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-border bg-surface/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-surface rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-semibold mb-2">Visit Our Location</p>
                    <p className="text-muted-foreground text-sm">Downtown Toronto</p>
                    <p className="text-muted-foreground text-sm">Easy parking & TTC access</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border bg-surface/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-background border border-border rounded-full hover:border-primary transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-background border border-border rounded-full hover:border-primary transition-colors group"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  @trimithairboutique
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a Quick Touch-up?</h3>
            <p className="text-muted-foreground mb-6">
              We accept walk-ins for quick touch-ups and last-minute appointments. 
              Call ahead to check availability.
            </p>
            <a href="tel:416-999-2524">
              <Button variant="hero" size="lg">
                Call Now: 416-999-2524
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;