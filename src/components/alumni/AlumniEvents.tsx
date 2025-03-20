
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const events = [
  {
    title: "Tech Industry Panel Discussion",
    description: "Join alumni leaders from major tech companies as they discuss current trends and career opportunities.",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Event",
    attendees: 124,
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "registered"
  },
  {
    title: "Summer Networking Mixer",
    description: "Connect with fellow alumni and current students in a casual setting with refreshments and activities.",
    date: "July 8, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Grand Hotel Rooftop",
    attendees: 85,
    type: "In-Person",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "interested"
  },
  {
    title: "Career Development Workshop",
    description: "Enhance your professional skills with this hands-on workshop led by career experts and successful alumni.",
    date: "July 22, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Main Campus, Building C",
    attendees: 56,
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Alumni Book Club - June Meeting",
    description: "Join us to discuss this month's book selection and connect with fellow alumni who share your love of reading.",
    date: "June 29, 2023",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual Event",
    attendees: 42,
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    status: "attended"
  }
];

const AlumniEvents = () => {
  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <Card className="p-4 glass-card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search events..." 
              className="pl-9 w-full"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button className="flex items-center gap-2 button-transition button-hover">
              <Calendar className="h-4 w-4" />
              <span>Calendar View</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Event Tabs */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="w-full mb-6 grid grid-cols-4 h-auto bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="upcoming" className="py-2 data-[state=active]:bg-white">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="registered" className="py-2 data-[state=active]:bg-white">
            Registered
          </TabsTrigger>
          <TabsTrigger value="interested" className="py-2 data-[state=active]:bg-white">
            Interested
          </TabsTrigger>
          <TabsTrigger value="past" className="py-2 data-[state=active]:bg-white">
            Past Events
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="registered" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.status === "registered").map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="interested" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.status === "interested").map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.status === "attended").map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const EventCard = ({ event }) => {
  return (
    <Card className="overflow-hidden glass-card transition-all duration-300 hover:shadow-medium hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-xs rounded-full text-primary">
          {event.type}
        </div>
        {event.status && (
          <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium backdrop-blur-xs rounded-full 
            ${event.status === 'registered' ? 'bg-green-100 text-green-800' : 
              event.status === 'interested' ? 'bg-blue-100 text-blue-800' : 
              'bg-gray-100 text-gray-800'}`}>
            {event.status === 'registered' ? 'Registered' : 
             event.status === 'interested' ? 'Interested' : 
             'Attended'}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
        </div>
        
        <div className="mt-auto space-y-3 pt-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{event.attendees} attending</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6 mt-2">
        {!event.status ? (
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">Interested</Button>
            <Button>Register Now</Button>
          </div>
        ) : (
          event.status === 'registered' ? (
            <Button variant="outline" className="w-full">Add to Calendar</Button>
          ) : (
            <Button className="w-full">Register Now</Button>
          )
        )}
      </div>
    </Card>
  );
};

export default AlumniEvents;
