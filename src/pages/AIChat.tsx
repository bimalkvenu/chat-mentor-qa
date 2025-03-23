
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
  Bot
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
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Animation for greeting message
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

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
      toast.success("Response generated!");
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

  const useQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <NavigationBar />
      
      <main className="flex-grow pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span>AlumniConnect AI</span>
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
            </h1>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Chat container */}
          <div className="glass-card rounded-xl overflow-hidden border border-slate-200 shadow-medium">
            {/* Chat messages */}
            <div className="h-[60vh] overflow-y-auto p-4 space-y-6 bg-white/80 backdrop-blur-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
                      message.role === 'user'
                        ? "bg-primary text-white"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    )}
                  >
                    {message.role === 'user' ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <BrainCircuit className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div
                    className={cn(
                      "p-4 rounded-2xl flex-1",
                      message.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "glass-card rounded-tl-none"
                    )}
                  >
                    <div className="prose prose-sm">
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <div 
                      className={cn(
                        "text-xs mt-2 opacity-70",
                        message.role === 'user' ? "text-white" : "text-muted-foreground"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 max-w-[85%] mr-auto animate-pulse">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-none glass-card">
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
            
            {/* Suggested questions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50/80 hidden md:block">
              <p className="text-sm font-medium text-muted-foreground mb-3">Suggested Questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => useQuestion(question)}
                    className="inline-flex px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm hover:bg-slate-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Input area */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="relative">
                <Textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about alumni resources, events, or connections..."
                  className="min-h-[60px] pr-12 resize-none border-slate-200 focus:border-primary focus:ring-primary"
                  maxLength={500}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="absolute right-2 bottom-2 bg-primary hover:bg-primary/90"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  <span>Powered by Azure OpenAI</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMessages(initialMessages)}
                  className="text-xs h-8 px-2"
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Reset chat
                </Button>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 glass-card transition-all hover:shadow-medium">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium mb-2">Natural Conversations</h3>
                <p className="text-sm text-muted-foreground">Have fluid, natural conversations with AI that understands context.</p>
              </div>
            </Card>
            
            <Card className="p-4 glass-card transition-all hover:shadow-medium">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-2">Custom Trained</h3>
                <p className="text-sm text-muted-foreground">Our AI is fine-tuned on alumni data, resources, and historical knowledge.</p>
              </div>
            </Card>
            
            <Card className="p-4 glass-card transition-all hover:shadow-medium">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium mb-2">24/7 Assistance</h3>
                <p className="text-sm text-muted-foreground">Get answers and guidance anytime, day or night, without waiting.</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIChat;
