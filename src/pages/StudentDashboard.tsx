
import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import StudentStats from '@/components/student/StudentStats';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';
import CourseProgress from '@/components/student/CourseProgress';
import LearningResources from '@/components/student/LearningResources';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GraduationCap, BookOpen, Calendar, Clock, BarChart } from 'lucide-react';

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
          <Tabs defaultValue="assignments" className="w-full mt-8">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-4 h-auto bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="assignments" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Assignments</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Courses</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Schedule</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Resources</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="assignments" className="mt-0">
              <UpcomingAssignments />
            </TabsContent>
            
            <TabsContent value="courses" className="mt-0">
              <CourseProgress />
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-0">
              <div className="grid gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Weekly Schedule
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Time</th>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Monday</th>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Tuesday</th>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Wednesday</th>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Thursday</th>
                          <th className="border-b py-2 px-3 text-left font-medium text-muted-foreground">Friday</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b py-2 px-3">9:00 - 10:30</td>
                          <td className="border-b py-2 px-3 bg-primary/10 rounded">CS 201</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-primary/10 rounded">CS 201</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-accent/10 rounded">MATH 301</td>
                        </tr>
                        <tr>
                          <td className="border-b py-2 px-3">11:00 - 12:30</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-accent/10 rounded">MATH 301</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-accent/10 rounded">MATH 301</td>
                          <td className="border-b py-2 px-3"></td>
                        </tr>
                        <tr>
                          <td className="border-b py-2 px-3">14:00 - 15:30</td>
                          <td className="border-b py-2 px-3 bg-primary/20 rounded">CS 305</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-primary/20 rounded">CS 305</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3"></td>
                        </tr>
                        <tr>
                          <td className="border-b py-2 px-3">16:00 - 17:30</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-secondary/20 rounded">ENG 205</td>
                          <td className="border-b py-2 px-3"></td>
                          <td className="border-b py-2 px-3 bg-secondary/20 rounded">ENG 205</td>
                          <td className="border-b py-2 px-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-0">
              <LearningResources />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
