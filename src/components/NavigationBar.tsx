
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, X, GraduationCap, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-semibold text-xl">AlumniConnect</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/ai-chat" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            AI Assistant
          </Link>
          <Link 
            to="/events" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Events
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="button-transition button-hover focus-ring"
          >
            Sign In
          </Button>
          <Button 
            className="button-transition button-hover focus-ring"
          >
            Join Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-base font-medium transition-colors hover:text-primary flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/ai-chat" 
              className="py-2 text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Assistant
            </Link>
            <Link 
              to="/events" 
              className="py-2 text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Button 
                variant="outline"
                className="w-full justify-center button-transition focus-ring"
              >
                Sign In
              </Button>
              <Button 
                className="w-full justify-center button-transition focus-ring"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
