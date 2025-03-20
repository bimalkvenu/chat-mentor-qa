
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Clock, Calendar, Users, MessageCircle, Search, Filter, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const mentors = [
  {
    name: "Jennifer Chen",
    role: "Product Manager at Microsoft",
    specialties: ["Career Guidance", "Tech Leadership", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.9,
    reviews: 28
  },
  {
    name: "Michael Roberts",
    role: "Senior Software Engineer at Amazon",
    specialties: ["Software Development", "System Design", "Interview Prep"],
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.7,
    reviews: 19
  },
  {
    name: "Sophia Williams",
    role: "Marketing Director at Google",
    specialties: ["Digital Marketing", "Brand Strategy", "Leadership"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.8,
    reviews: 32
  },
  {
    name: "James Wilson",
    role: "Data Scientist at Netflix",
    specialties: ["Machine Learning", "Data Analysis", "AI Ethics"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.6,
    reviews: 15
  }
];

const sessions = [
  {
    mentor: "Jennifer Chen",
    topic: "Career Transition Guidance",
    date: "June 18, 2023",
    time: "3:00 PM - 4:00 PM",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    mentor: "Michael Roberts",
    topic: "Technical Interview Preparation",
    date: "June 5, 2023",
    time: "5:30 PM - 6:30 PM",
    status: "completed",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const AlumniMentorship = () => {
  return (
    <div className="space-y-6">
      {/* Mentorship Progress Card */}
      <Card className="p-6 glass-card">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-2">Your Mentorship Journey</h3>
            <p className="text-sm text-muted-foreground mb-4">Track your progress and mentorship goals</p>
            
            <div className="grid gap-4 mb-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sessions Completed</span>
                  <span className="text-sm font-medium">4/10</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Goals Achieved</span>
                  <span className="text-sm font-medium">2/5</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="button-transition button-hover flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Book Session</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Resource Library</span>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Next Session</span>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">June 18</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Jennifer Chen" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-sm">Jennifer Chen</p>
                    <p className="text-xs text-muted-foreground">Product Manager at Microsoft</p>
                  </div>
                </div>
                <p className="text-sm font-medium mb-1">Career Transition Guidance</p>
                <p className="text-xs text-muted-foreground">June 18, 3:00 PM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Mentorship Tabs */}
      <Tabs defaultValue="find" className="w-full">
        <TabsList className="w-full mb-6 grid grid-cols-3 h-auto bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="find" className="py-2 data-[state=active]:bg-white">
            Find a Mentor
          </TabsTrigger>
          <TabsTrigger value="sessions" className="py-2 data-[state=active]:bg-white">
            My Sessions
          </TabsTrigger>
          <TabsTrigger value="resources" className="py-2 data-[state=active]:bg-white">
            Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="find" className="mt-0">
          {/* Search and Filter Bar */}
          <Card className="p-4 glass-card mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search mentors by name, role, or expertise..." 
                  className="pl-9 w-full"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <Card 
                key={index} 
                className="overflow-hidden glass-card transition-all duration-300 hover:shadow-medium hover:-translate-y-1 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-semibold">{mentor.name}</h3>
                      <div className="flex items-center text-sm">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{mentor.rating}</span>
                        <span className="text-muted-foreground ml-1">({mentor.reviews})</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{mentor.role}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="flex items-center justify-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>Message</span>
                    </Button>
                    <Button className="flex items-center justify-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Book Session</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sessions" className="mt-0">
          <div className="grid gap-6">
            {sessions.map((session, index) => (
              <Card key={index} className="overflow-hidden glass-card">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/5 md:min-h-full p-4 md:p-0 flex md:block">
                    <img 
                      src={session.image} 
                      alt={session.mentor} 
                      className="w-16 h-16 md:w-full md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-4/5 flex flex-col justify-between">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="text-lg font-semibold mr-2">{session.mentor}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            session.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {session.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </span>
                        </div>
                        <p className="font-medium">{session.topic}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex md:flex-col items-start md:items-end text-sm">
                        <div className="flex items-center mr-4 md:mr-0 md:mb-1">
                          <Calendar className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                      {session.status === 'upcoming' ? (
                        <>
                          <Button variant="outline" className="flex items-center justify-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Add to Calendar</span>
                          </Button>
                          <Button className="flex items-center justify-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>Message Mentor</span>
                          </Button>
                          <Button variant="outline" className="text-red-600 hover:bg-red-50">
                            Reschedule
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" className="flex items-center justify-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>Session Notes</span>
                          </Button>
                          <Button className="flex items-center justify-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            <span>Book Follow-up</span>
                          </Button>
                          <Button variant="outline">Leave Feedback</Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="resources" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Career Development Guide",
                description: "A comprehensive guide to advancing your career with tips from successful alumni.",
                type: "PDF Guide",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Interview Preparation Toolkit",
                description: "Practice questions, tips, and resources to help you ace your next interview.",
                type: "Interactive Toolkit",
                icon: <GraduationCap className="h-5 w-5" />
              },
              {
                title: "Networking Strategies Webinar",
                description: "Recording of our popular webinar on effective networking techniques.",
                type: "Video Recording",
                icon: <Users className="h-5 w-5" />
              },
              {
                title: "Industry Insights Report",
                description: "Latest trends and opportunities across various industries from our alumni network.",
                type: "Research Report",
                icon: <BookOpen className="h-5 w-5" />
              }
            ].map((resource, index) => (
              <Card key={index} className="p-6 glass-card hover:shadow-medium transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <div className="text-primary">{resource.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlumniMentorship;
