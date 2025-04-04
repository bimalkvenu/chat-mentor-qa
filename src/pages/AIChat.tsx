
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  BrainCircuit, 
  ArrowUp, 
  User, 
  RotateCcw, 
  X, 
  MessageSquare,
  Sparkles,
  Bot,
  Stars,
  Zap,
  Crown,
  Rocket,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hi there! 👋 I\'m AlumniConnect AI, your personal assistant for all alumni-related questions. How can I help you today?',
    role: 'assistant',
    timestamp: new Date()
  }
];

const suggestedQuestions = [
  "How can I find alumni mentors in my field?",
  "When is the next networking event?",
  "What scholarships are available for alumni?",
  "How do I update my profile information?",
  "Can you help me connect with alumni in tech companies?"
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  const [animatedBackground, setAnimatedBackground] = useState(true);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Set loaded state for entrance animations
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Hide intro animation after a delay
    const introTimeout = setTimeout(() => {
      setShowIntroAnimation(false);
    }, 2500);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(introTimeout);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Animation for greeting message
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Enhanced parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!chatContainerRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Apply enhanced transform for a more pronounced parallax effect
      chatContainerRef.current.style.transform = `
        translate(${x * 8 - 4}px, ${y * 8 - 4}px)
        rotate(${(x - 0.5) * 1}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add floating particle animation
  useEffect(() => {
    if (!animatedBackground) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-30 pointer-events-none';
      
      // Random size
      const size = Math.random() * 100 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // Random color
      const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-indigo-400'];
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      
      // Random blur
      particle.style.filter = `blur(${Math.random() * 20 + 10}px)`;
      
      // Animation
      particle.animate(
        [
          { transform: 'translateY(0) scale(1)', opacity: 0.3 },
          { transform: `translateY(-${Math.random() * 200 + 100}px) scale(${Math.random() * 0.5 + 0.5})`, opacity: 0 }
        ],
        {
          duration: Math.random() * 10000 + 5000,
          easing: 'ease-out'
        }
      );
      
      document.body.appendChild(particle);
      
      // Remove after animation completes
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 15000);
    };
    
    // Create particles at intervals
    const interval = setInterval(() => {
      createParticle();
    }, 3000);
    
    // Create initial particles
    for (let i = 0; i < 5; i++) {
      createParticle();
    }
    
    return () => clearInterval(interval);
  }, [animatedBackground]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setActiveQuestionIndex(null);
    
    // Simulate AI response
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateMockResponse(input),
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      toast.success("Response generated!", {
        icon: <Sparkles className="h-4 w-4 text-yellow-400 animate-ping" />,
        className: "animate-slide-in",
      });
    }, 1500);
  };

  const generateMockResponse = (query: string): string => {
    // Simple mock responses based on keywords
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('mentor') || lowerQuery.includes('mentorship')) {
      return "I found several mentors in our network! You can connect with them in the Mentorship section of the Alumni Portal. Would you like me to recommend specific mentors based on your interests?";
    } else if (lowerQuery.includes('event') || lowerQuery.includes('meeting')) {
      return "The next alumni networking event is 'Summer Tech Mixer' on June 18th at Grand Hotel, starting at 6 PM. Would you like me to add this to your calendar?";
    } else if (lowerQuery.includes('scholarship') || lowerQuery.includes('funding')) {
      return "There are 3 scholarships currently available for alumni: The Innovation Grant, Continuing Education Scholarship, and Global Leadership Fund. Each has different requirements. Would you like details on any specific one?";
    } else if (lowerQuery.includes('profile') || lowerQuery.includes('update')) {
      return "You can update your profile information in the Alumni Portal. Go to My Profile and click the Edit Profile button. All changes save automatically. Is there a specific section you'd like to update?";
    } else {
      return "That's a great question! I'm here to help with all your alumni network needs. I can assist with finding mentors, getting event information, accessing resources, and making connections with other alumni. Could you tell me more about what specific information you're looking for?";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const useQuestion = (question: string, index: number) => {
    setInput(question);
    setActiveQuestionIndex(index);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden relative">
      {/* Dynamic background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl animate-float" style={{animationDelay: '-6s'}}></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl animate-float" style={{animationDelay: '-9s'}}></div>
      </div>
      
      {/* Intro animation overlay with enhanced effects */}
      {showIntroAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 animate-fade-out duration-1000">
          <div className="text-center">
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                <BrainCircuit className="h-20 w-20 text-white animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white animate-pulse-subtle"></div>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" style={{animationDuration: '1.5s'}}></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
              </div>
              {/* Orbiting particles */}
              <div className="absolute w-40 h-40 animate-spin-slow" style={{animationDuration: '8s'}}>
                <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-white/70 blur-sm"></div>
              </div>
              <div className="absolute w-36 h-36 animate-spin-slow" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
                <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-white/60 blur-sm"></div>
              </div>
            </div>
            <h1 className="text-white text-3xl font-bold animate-fade-in">
              Welcome to AlumniConnect AI
            </h1>
            <p className="text-white/70 mt-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
              Your intelligent assistant powered by Azure AI
            </p>
          </div>
        </div>
      )}
      
      <NavigationBar />
      
      <main className={cn(
        "flex-grow pt-20 pb-10 px-4 transition-all duration-1000 ease-in-out",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-6 animate-fade-in relative">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <div className="relative">
                <BrainCircuit className="h-8 w-8 text-primary animate-pulse-subtle" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                {/* Light rays effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 w-16 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-sm animate-spin-slow" style={{animationDuration: '15s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-sm rotate-45 animate-spin-slow" style={{animationDuration: '15s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-sm rotate-90 animate-spin-slow" style={{animationDuration: '15s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-sm rotate-135 animate-spin-slow" style={{animationDuration: '15s'}}></div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text animate-pulse-subtle relative">
                AlumniConnect AI
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 animate-pulse-subtle"></span>
              </span>
              <span className="ml-2 px-2 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs font-medium rounded-full flex items-center gap-1 animate-fade-in">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Active
              </span>
            </h1>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="hover:bg-slate-100 rounded-full transition-all duration-500 hover:rotate-90 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Chat container with animated gradient border */}
          <div 
            className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl overflow-hidden animate-fade-in animate-pulse-subtle group hover:-translate-y-1 transition-transform duration-700"
            ref={chatContainerRef}
          >
            {/* Animated border gradient flow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated background elements - enhanced with more elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl animate-float"></div>
              <div className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full bg-purple-500/15 blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
              <div className="absolute top-2/3 -right-24 w-56 h-56 rounded-full bg-pink-500/15 blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-indigo-500/15 blur-3xl animate-float" style={{animationDelay: '-6s'}}></div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden backdrop-blur-lg bg-white/90 relative">
              {/* Chat messages */}
              <div className="h-[60vh] overflow-y-auto p-4 space-y-6 bg-transparent backdrop-blur-sm">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto",
                      "animate-slide-in"
                    )}
                    style={{animationDelay: `${index * 0.15}s`}}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-all duration-500 hover:scale-125 group-hover:rotate-12",
                        message.role === 'user'
                          ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-md"
                          : "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md"
                      )}
                    >
                      {message.role === 'user' ? (
                        <User className="h-5 w-5" />
                      ) : (
                        <div className="relative">
                          <BrainCircuit className="h-5 w-5 animate-pulse-subtle" />
                          {/* Small orbiting particle effect */}
                          <div className="absolute inset-0 rounded-full animate-spin-slow" style={{animationDuration: '3s'}}>
                            <div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 rounded-full bg-white/70"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div
                      className={cn(
                        "p-4 rounded-2xl flex-1 shadow-md transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg",
                        message.role === 'user' 
                          ? "bg-gradient-to-br from-primary to-blue-600 text-white rounded-tr-none hover:from-blue-600 hover:to-primary" 
                          : "bg-gradient-to-br from-slate-50 to-white rounded-tl-none border border-slate-100 hover:border-purple-100"
                      )}
                    >
                      <div className="prose prose-sm">
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <div 
                        className={cn(
                          "text-xs mt-2 opacity-70 flex items-center gap-1",
                          message.role === 'user' ? "text-white" : "text-muted-foreground"
                        )}
                      >
                        {message.role === 'assistant' && (
                          <Sparkles className="h-3 w-3 animate-pulse-subtle" />
                        )}
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 max-w-[85%] mr-auto animate-fade-in">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
                      <div className="relative">
                        <BrainCircuit className="h-5 w-5 animate-pulse" />
                        <div className="absolute inset-0 rounded-full animate-spin-slow" style={{animationDuration: '3s'}}>
                          <div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 rounded-full bg-white/70"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl rounded-tl-none bg-gradient-to-br from-slate-50 to-white shadow-md border border-slate-100">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-300 animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-300 animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={endOfMessagesRef} />
              </div>
              
              {/* Suggested questions - enhanced with new animations */}
              <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 hidden md:block">
                <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-1 animate-fade-in">
                  <Lightbulb className="h-4 w-4 text-yellow-500 animate-pulse-subtle" />
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => useQuestion(question, index)}
                      className={cn(
                        "inline-flex px-3 py-1.5 rounded-full text-sm transition-all duration-500",
                        activeQuestionIndex === index 
                          ? "bg-primary text-white shadow-md scale-105 -translate-y-1" 
                          : "bg-white border border-slate-200 hover:bg-slate-100 hover:shadow hover:scale-105 hover:-translate-y-1"
                      )}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Input area with new animations */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <div className="relative">
                  <Textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about alumni resources, events, or connections..."
                    className="min-h-[60px] pr-12 resize-none rounded-xl border-slate-200 focus:border-primary/70 focus:ring-primary/50 shadow-sm transition-all duration-500 focus:shadow-md focus:-translate-y-1"
                    maxLength={500}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    size="icon"
                    className={cn(
                      "absolute right-2 bottom-2 rounded-full transition-all duration-500 overflow-hidden",
                      input.trim() && !isTyping 
                        ? "bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:-translate-y-1 hover:scale-110" 
                        : "bg-slate-200"
                    )}
                  >
                    {input.trim() && !isTyping && (
                      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 animate-ping"></div>
                    )}
                    <ArrowUp className={cn(
                      "h-4 w-4 transition-transform duration-500",
                      input.trim() && !isTyping ? "hover:translate-y-[-2px]" : ""
                    )} />
                  </Button>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-yellow-500 animate-pulse-subtle" />
                    <span>Powered by Azure OpenAI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAnimatedBackground(!animatedBackground)}
                      className="text-xs text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors duration-300"
                    >
                      <Sparkles className="h-3 w-3" />
                      <span>{animatedBackground ? 'Reduce effects' : 'Enable effects'}</span>
                    </button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMessages(initialMessages)}
                      className="text-xs h-8 px-2 hover:bg-slate-100 transition-all duration-300 hover:scale-105 ml-2"
                    >
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Reset chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features with enhanced animations */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Stars className="h-6 w-6 text-blue-600" />,
                title: "Advanced Conversations",
                description: "Have fluid, natural conversations with AI that understands context and nuance.",
                color: "from-white/90 to-blue-50/90",
                iconBg: "from-blue-100 to-blue-200",
                titleColor: "text-blue-800",
                delay: 0
              },
              {
                icon: <Crown className="h-6 w-6 text-purple-600" />,
                title: "Custom Trained",
                description: "Our AI is fine-tuned on alumni data, resources, and historical knowledge.",
                color: "from-white/90 to-purple-50/90",
                iconBg: "from-purple-100 to-purple-200",
                titleColor: "text-purple-800",
                delay: 0.2
              },
              {
                icon: <Rocket className="h-6 w-6 text-green-600" />,
                title: "24/7 Assistance",
                description: "Get answers and guidance anytime, day or night, without waiting.",
                color: "from-white/90 to-green-50/90",
                iconBg: "from-green-100 to-green-200",
                titleColor: "text-green-800",
                delay: 0.4
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className={`p-4 glass-card transition-all hover:-translate-y-3 hover:scale-105 duration-700 border-0 shadow-md bg-gradient-to-br ${feature.color} animate-fade-in group overflow-hidden`}
                style={{animationDelay: `${feature.delay}s`}}
              >
                <div className="flex flex-col items-center text-center p-2 relative">
                  {/* Background effects */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-100/0 via-blue-100/30 to-blue-100/0 blur-xl"></div>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.iconBg} flex items-center justify-center mb-3 shadow-inner transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden`}>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-white/70 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    {feature.icon}
                  </div>
                  <h3 className={`font-medium mb-2 ${feature.titleColor} relative group-hover:scale-105 transition-transform duration-700`}>
                    {feature.title}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-gray-700 transition-colors duration-700">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Testimonials section with enhanced animations */}
          <div className="mt-16 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 relative">
              <Zap className="h-5 w-5 text-yellow-500 animate-pulse-subtle" />
              <span className="relative">
                What Alumni Say About Our AI
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-300/30 via-primary to-purple-300/30 rounded-full transform origin-left scale-x-0 animate-scale-in" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "The AI assistant helped me find the perfect mentor in my field within minutes!",
                  author: "Sarah Johnson",
                  role: "Class of 2018",
                  delay: 0.6
                },
                {
                  quote: "I was able to get information about alumni events instantly, even at 2 AM!",
                  author: "Michael Chen",
                  role: "Class of 2020",
                  delay: 0.8
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-2xl border-0 shadow-md bg-gradient-to-br from-white/90 to-blue-50/90 transform transition-all duration-700 hover:-translate-y-3 hover:shadow-lg animate-fade-in group"
                  style={{animationDelay: `${testimonial.delay}s`}}
                >
                  <div className="flex flex-col h-full relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="mb-4 relative">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Sparkles key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4 flex-grow">"{testimonial.quote}"</p>
                    
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIChat;
