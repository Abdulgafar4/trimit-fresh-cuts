import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Scissors, Clock } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5000+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "8+", label: "Years Experience" },
    { icon: <Scissors className="w-6 h-6" />, number: "15000+", label: "Cuts Completed" },
    { icon: <Clock className="w-6 h-6" />, number: "6", label: "Days a Week" }
  ];

  const teamMembers = [
    {
      name: "Marcus Thompson",
      role: "Master Barber & Owner",
      experience: "8 years",
      specialties: ["Fades", "Beard Styling", "Classic Cuts"],
      bio: "Certified master barber with a passion for precision and style."
    },
    {
      name: "David Chang",
      role: "Senior Barber",
      experience: "5 years",
      specialties: ["Modern Cuts", "Styling", "Color"],
      bio: "Specialist in contemporary men's grooming and color techniques."
    },
    {
      name: "Alex Rivera",
      role: "Barber Stylist",
      experience: "3 years",
      specialties: ["Taper Fades", "Hot Towel Shaves"],
      bio: "Expert in traditional barbering with a modern twist."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-6xl text-foreground mb-4">
            ABOUT TRIM-IT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2016 in the heart of downtown Toronto, Trim-It has been setting the standard 
              for modern barbering. We combine traditional techniques with contemporary style to deliver 
              exceptional grooming experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is simple: to make every client look and feel their absolute best. We believe 
              that a great haircut is more than just a service—it's an investment in confidence and self-expression.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-foreground font-semibold">Licensed & Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-foreground font-semibold">Premium Quality Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-foreground font-semibold">Sanitized & Clean Environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-foreground font-semibold">Personalized Consultation</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={teamPhoto}
                alt="Trim-It Barbershop Team"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border bg-background/30 backdrop-blur-sm hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-surface rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Scissors className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.experience} experience</p>
                  <p className="text-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Excellence, Authenticity, and Community. These principles guide everything we do, 
              from the moment you walk in to the final styling touch.
            </p>
            <Button variant="hero" size="lg">
              Experience the Difference
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;