
import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import EventNoticeBoard from '@/components/student/EventNoticeBoard';

const Events = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Campus Events</h1>
            <p className="text-muted-foreground">Stay updated with all the upcoming events and activities</p>
          </div>
          
          <EventNoticeBoard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
