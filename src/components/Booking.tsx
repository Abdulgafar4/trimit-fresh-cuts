import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Scissors } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'haircut', name: 'Premium Haircut', duration: '45 min', price: '$35' },
    { id: 'fade', name: 'Fade Specialist', duration: '60 min', price: '$40' },
    { id: 'beard', name: 'Beard & Mustache', duration: '30 min', price: '$25' },
    { id: 'full', name: 'The Full Experience', duration: '90 min', price: '$65' }
  ];

  const barbers = [
    { id: 'marcus', name: 'Marcus Thompson', specialty: 'Master Barber' },
    { id: 'david', name: 'David Chang', specialty: 'Senior Barber' },
    { id: 'alex', name: 'Alex Rivera', specialty: 'Barber Stylist' },
    { id: 'any', name: 'Any Available', specialty: 'First Available' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-4xl md:text-6xl text-foreground mb-4">
            BOOK APPOINTMENT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your appointment online and secure your preferred time slot with your favorite barber.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground text-center">
                Reserve Your Spot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Service Selection */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Scissors className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Select Service</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Card 
                      key={service.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedService === service.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{service.name}</h4>
                          <span className="text-primary font-bold">{service.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.duration}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Barber Selection */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Choose Your Barber</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {barbers.map((barber) => (
                    <Card 
                      key={barber.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedBarber === barber.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedBarber(barber.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-surface rounded-full mx-auto mb-3 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm">{barber.name}</h4>
                        <p className="text-muted-foreground text-xs">{barber.specialty}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Select Date</h3>
                  </div>
                  <Input 
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-background border-border focus:border-primary"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Select Time</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded text-sm transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background border border-border hover:border-primary text-foreground'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-foreground font-medium mb-2 block">First Name*</label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-foreground font-medium mb-2 block">Last Name*</label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-foreground font-medium mb-2 block">Phone Number*</label>
                    <Input 
                      type="tel"
                      placeholder="(416) 123-4567"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-foreground font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              {(selectedService || selectedBarber || selectedDate || selectedTime) && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    {selectedService && (
                      <p className="text-foreground">
                        <span className="font-medium">Service:</span> {services.find(s => s.id === selectedService)?.name}
                      </p>
                    )}
                    {selectedBarber && (
                      <p className="text-foreground">
                        <span className="font-medium">Barber:</span> {barbers.find(b => b.id === selectedBarber)?.name}
                      </p>
                    )}
                    {selectedDate && (
                      <p className="text-foreground">
                        <span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString()}
                      </p>
                    )}
                    {selectedTime && (
                      <p className="text-foreground">
                        <span className="font-medium">Time:</span> {selectedTime}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Book Button */}
              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="px-12 py-6 text-xl"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  Confirm Booking
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  * Required fields. You'll receive a confirmation via text/email.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Booking Methods */}
          <div className="mt-12 text-center">
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Prefer to Book by Phone?</h3>
              <p className="text-muted-foreground mb-4">
                Call us directly and we'll help you find the perfect appointment time.
              </p>
              <a href="tel:416-999-2524">
                <Button variant="cta" size="lg">
                  Call 416-999-2524
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;