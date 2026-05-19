import { motion } from 'motion/react';
import { Bot, Sparkles, Zap, PhoneCall } from 'lucide-react';

export function AiReceptionist() {
  return (
    <section id="ai-receptionist" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-gold border border-gold-500/20 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Bot className="w-64 h-64 text-gold-500" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gold-500/10 rounded-full px-4 py-2 border border-gold-500/20 mb-8">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-gold-500 text-[10px] font-mono uppercase tracking-[0.2em]">Next-Gen Booking System</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Meet Your 24/7 <span className="text-gradient-animate">AI Rental Receptionist</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book your exotic or luxury car instantly via voice or text. Our internal AI system handles everything from document verification to payment—available 24 hours a day, 7 days a week.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Instant Booking</h4>
                    <p className="text-slate-500 text-sm">Reserves vehicles in under 60 seconds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Voice Processing</h4>
                    <p className="text-slate-500 text-sm">Call us anytime to start your rental.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+16097551513" className="px-10 py-5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-2xl transition-all shadow-2xl flex items-center justify-center">
                  <PhoneCall className="mr-3 w-5 h-5" />
                  Call AI Assistant Now
                </a>
                <button className="px-10 py-5 glass border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/5">
                  Chat with AI
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative z-10 w-full aspect-square max-w-[400px] mx-auto">
                {/* AI Visualizer Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                      className="absolute w-full h-full border border-gold-500/30 rounded-full"
                    />
                  ))}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-full h-full border border-dashed border-gold-500/20 rounded-full"
                  />
                  <div className="absolute inset-4 bg-gradient-to-br from-gold-500 to-yellow-700 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                    <Bot className="w-24 h-24 text-slate-950" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
