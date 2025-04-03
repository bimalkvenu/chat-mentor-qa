
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bell, ArrowUp, Bot, Sparkles, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';

const AIAssistantWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you with your studies today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, isBot: false }]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: generateResponse(input), 
        isBot: true 
      }]);
      
      toast.success("Your AI assistant has responded", {
        icon: <Sparkles className="h-4 w-4 text-phthalo-medium" />
      });
      
      scrollToBottom();
    }, 1500);
  };
  
  const generateResponse = (question: string) => {
    const responses = [
      "I recommend checking out these resources in the library: Introduction to Algorithms, and Data Structures Explained. They're excellent for your current coursework.",
      "Based on your schedule, the best time to study would be between 3-5pm on Tuesdays and Thursdays. You have free blocks then with no upcoming assignments due.",
      "For your question about calculus, remember that the chain rule states that if y = f(g(x)), then dy/dx = (dy/du) × (du/dx) where u = g(x).",
      "Your next assignment in CS 201 is due this Friday at midnight. It covers database normalization concepts.",
      "I've found a study group that meets Wednesdays at 6pm in the library for Advanced Algorithms. Would you like me to register your interest?",
      "Based on your progress, I suggest focusing more on the practical applications section of your current module. That seems to be where you could strengthen your understanding."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const suggestedQuestions = [
    "When is my next assignment due?",
    "What are good resources for my database class?",
    "Can you find study groups for CS majors?",
    "Help me understand the chain rule",
    "What's the best study schedule for me?"
  ];

  return (
    <Card className="glass-card rounded-xl overflow-hidden animate-fade-in bg-gradient-to-br from-white via-phthalo-light/30 to-white">
      <CardHeader className="px-6 pt-6 pb-3 bg-gradient-to-r from-phthalo-light/50 to-white">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Bot className="h-5 w-5 text-phthalo" />
          AI Study Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Chat area */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-phthalo-light/20">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-white border border-phthalo-light/50 rounded-tl-none' 
                    : 'bg-phthalo text-white rounded-tr-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white border border-phthalo-light/50 p-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-phthalo-medium animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-phthalo-medium animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-phthalo-medium animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggested questions */}
        <div className="px-6 py-3 bg-phthalo-light/40 border-t border-phthalo-light/50">
          <p className="text-sm font-medium text-phthalo-dark mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-phthalo-medium" />
            Ask me about:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-xs px-3 py-1 bg-white border border-phthalo-light rounded-full hover:border-phthalo hover:bg-phthalo-light/30 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        
        {/* Input area */}
        <div className="p-4 border-t border-phthalo-light/50 bg-gradient-to-b from-white to-phthalo-light/20">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your AI assistant..."
              className="min-h-[60px] pr-14 resize-none bg-white/80 border-phthalo-light/50"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="absolute right-2 bottom-2 rounded-full bg-phthalo hover:bg-phthalo-dark"
              disabled={!input.trim() || isTyping}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistantWindow;
