import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink } from 'lucide-react';
import galleryImage from '@/assets/gallery-1.jpg';

const Gallery = () => {
  // Mock gallery data - in a real app, this would come from an API or CMS
  const galleryItems = [
    {
      id: 1,
      image: galleryImage,
      title: "Classic Fade Transform",
      category: "Fade Cuts"
    },
    {
      id: 2,
      image: galleryImage,
      title: "Beard Styling",
      category: "Beard Work"
    },
    {
      id: 3,
      image: galleryImage,
      title: "Modern Pompadour",
      category: "Styling"
    },
    {
      id: 4,
      image: galleryImage,
      title: "Low Taper Fade",
      category: "Fade Cuts"
    },
    {
      id: 5,
      image: galleryImage,
      title: "Hot Towel Shave",
      category: "Shaving"
    },
    {
      id: 6,
      image: galleryImage,
      title: "Textured Crop",
      category: "Modern Cuts"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-6xl text-foreground mb-4">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our latest cuts and styles. Every client leaves looking sharp and feeling confident.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-foreground text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Integration */}
        <div className="text-center">
          <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with our latest work and get style inspiration from our feed.
            </p>
            <Button variant="cta" size="lg" className="flex items-center space-x-2 mx-auto">
              <Instagram className="w-5 h-5" />
              <span>@trimithairboutique</span>
            </Button>
          </div>
        </div>

        {/* Testimonials Preview */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Johnson",
                review: "Best fade I've ever gotten. The attention to detail is incredible!",
                rating: 5
              },
              {
                name: "David Kim",
                review: "Professional service, clean shop, and amazing results every time.",
                rating: 5
              },
              {
                name: "Alex Rodriguez",
                review: "Finally found my go-to barber. Worth every penny.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-surface/30">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4">"{testimonial.review}"</p>
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;