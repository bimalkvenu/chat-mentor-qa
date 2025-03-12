
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Video, Calendar, Users } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 md:px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-xl animate-on-scroll">
          <div>
            <h4 className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-6">
              Connecting Alumni & Students
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Build Lasting <span className="text-gradient">Connections</span> That Matter
            </h1>
            <p className="text-lg text-muted-foreground">
              An intelligent platform that connects students with alumni through modern communication tools and AI-powered assistance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="button-transition button-hover focus-ring"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="button-transition button-hover focus-ring"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>5000+ Alumni</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30"></div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Weekly Events</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30"></div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="relative animate-on-scroll">
          <div className="glass-card rounded-2xl overflow-hidden shadow-strong relative z-10 transform md:translate-x-6 lg:translate-x-10">
            <div className="bg-gradient-to-br from-blue-500 to-violet-600 h-16 flex items-center px-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-auto flex space-x-3">
                <Video className="h-5 w-5 text-white opacity-80" />
                <MessageCircle className="h-5 w-5 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-blue-600">JD</span>
                </div>
                <div className="glass-card py-3 px-4 rounded-lg rounded-tl-none max-w-xs">
                  <p>Hello Sarah! I'd be happy to mentor you on your project. Let's schedule a video call to discuss your ideas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6 justify-end">
                <div className="bg-blue-50 py-3 px-4 rounded-lg rounded-tr-none max-w-xs">
                  <p>That would be perfect! I'm available tomorrow afternoon. Looking forward to learning from your experience.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-purple-600">SC</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-white">AI</span>
                </div>
                <div className="glass-card py-3 px-4 rounded-lg rounded-tl-none max-w-xs">
                  <p>I've scheduled your mentorship call for tomorrow at 3 PM. Would you like me to set up a calendar invite?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 -left-4 md:-left-8 glass-card rounded-xl shadow-medium p-5 max-w-[200px] z-0 hidden md:block animate-float">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mb-3">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-medium mb-1">Upcoming Event</h4>
            <p className="text-sm text-muted-foreground">Tech Industry Webinar - June 15th</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
