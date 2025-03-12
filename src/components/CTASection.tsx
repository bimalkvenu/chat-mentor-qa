
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10"></div>
      <div className="absolute right-0 top-0 w-full h-full bg-blue-100 opacity-10 clip-path-circle -z-10"></div>
      
      <div className="container mx-auto text-center max-w-3xl animate-on-scroll">
        <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Join Our Alumni Network Today
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Connect with fellow alumni, find mentors, attend exclusive events, and leverage
          our AI-powered assistance for your professional growth journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="button-transition button-hover focus-ring"
          >
            Sign Up Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="button-transition button-hover focus-ring"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-soft text-center">
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-muted-foreground">Active Alumni Members</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-soft text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Mentorship Connections</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-soft text-center">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <p className="text-muted-foreground">Events Per Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
