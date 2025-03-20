
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart, Calendar, MessageSquare, Award, Video, Users, BookOpen, Briefcase } from 'lucide-react';

const AlumniDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Users className="h-5 w-5" />, label: "Connections", value: "43", change: "+5" },
          { icon: <Calendar className="h-5 w-5" />, label: "Events Attended", value: "12", change: "+2" },
          { icon: <MessageSquare className="h-5 w-5" />, label: "Messages", value: "28", change: "+9" },
          { icon: <Award className="h-5 w-5" />, label: "Mentor Sessions", value: "8", change: "+1" }
        ].map((stat, index) => (
          <Card key={index} className="p-4 glass-card">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <div className="text-primary">{stat.icon}</div>
              </div>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{stat.change}</span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Profile Completion */}
      <Card className="p-6 glass-card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Complete Your Profile</h3>
            <p className="text-sm text-muted-foreground">Enhance your visibility to other alumni and potential employers.</p>
          </div>
          <Button variant="outline" className="whitespace-nowrap">View Profile</Button>
        </div>
        <Progress value={65} className="h-2 mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>65% Complete</span>
          <span>5 items remaining</span>
        </div>
      </Card>

      {/* Activity Feed and Upcoming Events */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6 glass-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { icon: <Users className="h-4 w-4" />, text: "You connected with James Wilson" },
                { icon: <Calendar className="h-4 w-4" />, text: "You RSVP'd to Tech Industry Panel" },
                { icon: <MessageSquare className="h-4 w-4" />, text: "Lisa Chen sent you a message" },
                { icon: <Video className="h-4 w-4" />, text: "Mentorship session with Michael Roberts completed" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">{activity.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">View All Activity</Button>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6 glass-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {[
                { name: "Tech Industry Panel", date: "June 15", time: "6:00 PM" },
                { name: "Summer Networking Mixer", date: "July 8", time: "7:00 PM" },
              ].map((event, index) => (
                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{event.name}</p>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground">{event.date}</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">View All Events</Button>
          </Card>
          
          <Card className="p-6 glass-card">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Job Opportunities
            </h3>
            <div className="space-y-4">
              {[
                { company: "Google", role: "UX Designer", posted: "2 days ago" },
                { company: "Microsoft", role: "Software Engineer", posted: "5 days ago" },
              ].map((job, index) => (
                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{job.role}</p>
                  <div className="flex justify-between text-sm">
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-muted-foreground">{job.posted}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">View All Jobs</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;
