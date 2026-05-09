import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, User, Sparkles, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../../lib/utils';

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Rudraksh's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getSimulatedResponse = (input: string) => {
    const query = input.toLowerCase();
    if (query.includes('skills')) return "Rudraksh is proficient in React, Next.js, Node.js, and TypeScript. He also has deep expertise in Tailwind CSS and AI integration.";
    if (query.includes('projects')) return "He has built impressive projects like AHAAR (Automated Restaurants), DRISHTI (AI Code Auditing), and DHAN (Financial Analytics).";
    if (query.includes('experience')) return "Rudraksh has 4 months of internship experience at FirstVidya and has been freelancing since 2025.";
    if (query.includes('contact') || query.includes('hire')) return "You can reach Rudraksh via the contact form on this site, or through his LinkedIn and Email.";
    return "That's an interesting question! While I'm in simulation mode, I can tell you that Rudraksh is a visionary developer focused on AI and scalable full-stack systems.";
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      if (ai) {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: userMessage,
          config: {
            systemInstruction: `You are an AI assistant for Rudraksh Tyagi's portfolio. 
            Rudraksh is a Full Stack Developer & AI Enthusiast.
            Skills: React, Next.js, Node.js, TypeScript, Gemini AI, MongoDB.
            Experience: Intern at FirstVidya (Feb-June 2026), Freelancer since 2025.
            Key Projects: 
            - AHAAR (Advanced Hyperlocal App for Automated Restaurants)
            - DRISHTI (Deep Review Intelligence System for Technical Inspection)
            - DHAN (Digital Hub for Analytics & Net-worth)
            Tone: Professional, futuristic, helpful, and concise. 
            If asked about hiring Rudraksh, suggest using the contact form on the website.`,
          }
        });

        const aiResponse = response.text || "I'm sorry, I couldn't process that. Please try again.";
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      } else {
        // Fallback to simulated response
        await new Promise(resolve => setTimeout(resolve, 800));
        const simResponse = getSimulatedResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: `[SIMULATION] ${simResponse}` }]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "System error. My neural links are fuzzy. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-dark border-cyan-500/30 w-[350px] h-[500px] mb-4 flex flex-col overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/10 origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 border-b border-foreground/10 flex items-center justify-between bg-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                  <Bot size={20} />
                </div>
                <div>
                   <div className="text-sm font-bold">Neural Assistant</div>
                   <div className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                     Online
                   </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-2xl text-sm",
                    m.role === 'user' 
                      ? "bg-cyan-500 text-black rounded-tr-none" 
                      : "bg-foreground/5 border border-foreground/10 opacity-90 rounded-tl-none"
                  )}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-cyan-400 text-xs px-2">
                   <Sparkles size={14} className="animate-spin" />
                   Processing...
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-foreground/10 bg-background/80">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me something..."
                  className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-black hover:bg-cyan-400 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] relative group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-black" />
        )}
        
        {/* Tooltip */}
        <div className="absolute right-[120%] bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
           AI Assistant
        </div>
      </motion.button>
    </div>
  );
};
