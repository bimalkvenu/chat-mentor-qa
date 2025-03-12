
import React from 'react';
import { 
  MessageCircle, 
  Video, 
  GraduationCap, 
  Calendar,
  Users,
  Cloud,
  Search,
  HeartHandshake
} from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Real-time Chat",
    description: "Connect with alumni and students through instant messaging for quick questions and casual conversations."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Calls",
    description: "Have face-to-face meetings for mentorship sessions, interviews, or in-depth discussions."
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Mentorship Program",
    description: "Match with the perfect mentor based on your career goals, industry, and interests."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Events & Webinars",
    description: "Participate in exclusive alumni events, webinars, and panel discussions to expand your network."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Azure Cloud Integration",
    description: "Benefit from Microsoft Azure's secure and scalable cloud infrastructure for reliable performance."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Alumni Directory",
    description: "Search and filter through the alumni database to find connections in your desired industry or location."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Groups",
    description: "Join interest-based or industry-specific groups to collaborate with like-minded peers and alumni."
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Career Opportunities",
    description: "Access exclusive job postings, internships, and career advancement opportunities shared by alumni."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Meaningful Connections
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform brings together alumni and students with tools designed to foster collaboration, 
            mentorship, and professional growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-medium animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
