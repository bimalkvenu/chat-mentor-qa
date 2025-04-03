
import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import StudentStats from '@/components/student/StudentStats';
import EventNoticeBoard from '@/components/student/EventNoticeBoard';
import AIAssistantWindow from '@/components/student/AIAssistantWindow';
import ConnectedMentors from '@/components/student/ConnectedMentors';
import MentorSearch from '@/components/student/MentorSearch';
import MentorChat from '@/components/student/MentorChat';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, MessageCircle, Users, Search, Bell } from 'lucide-react';

const StudentDashboard = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Welcome Header */}
          <div className="mb-8 p-6 glass-card rounded-xl animate-fade-in">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Hello, Alex</h1>
                <p className="text-muted-foreground">Computer Science | Year 2</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Current GPA:</span>
                <span className="text-xl font-semibold text-gradient">3.85</span>
              </div>
            </div>
          </div>
          
          {/* Student Dashboard Content */}
          <StudentStats />
          
          {/* Main Tabs Navigation */}
          <Tabs defaultValue="events" className="w-full mt-8">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-5 h-auto bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="events" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Events</span>
              </TabsTrigger>
              <TabsTrigger value="ai-assistant" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>AI Assistant</span>
              </TabsTrigger>
              <TabsTrigger value="mentors" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>My Mentors</span>
              </TabsTrigger>
              <TabsTrigger value="search" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Find Mentors</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-0">
              <EventNoticeBoard />
            </TabsContent>
            
            <TabsContent value="ai-assistant" className="mt-0">
              <AIAssistantWindow />
            </TabsContent>
            
            <TabsContent value="mentors" className="mt-0">
              <ConnectedMentors />
            </TabsContent>
            
            <TabsContent value="search" className="mt-0">
              <MentorSearch />
            </TabsContent>
            
            <TabsContent value="chat" className="mt-0">
              <MentorChat />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
