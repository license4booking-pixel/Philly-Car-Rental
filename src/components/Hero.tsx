import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grids and Glows (Linear Style) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Animated glowing lines */}
      <div className="absolute top-[20%] left-0 w-full h-[1px] opacity-30 pointer-events-none">
        <div className="glow-line" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-[60%] left-0 w-full h-[1px] opacity-20 pointer-events-none">
        <div className="glow-line" style={{ animationDelay: '4s', width: '300px' }} />
      </div>
      <div className="absolute top-0 left-[30%] w-[1px] h-full opacity-20 pointer-events-none">
        <div className="glow-line-vertical" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-0 left-[70%] w-[1px] h-full opacity-20 pointer-events-none">
        <div className="glow-line-vertical" style={{ animationDelay: '7s' }} />
      </div>

      <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 parallax-blur rounded-full animate-pulse-slow pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 parallax-blur rounded-full animate-pulse-slow pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gold-500 text-[10px] font-mono tracking-[0.2em] mb-6">
              EXOTIC & PREMIUM PHILADELPHIA RENTALS
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-[0.95] tracking-tight">
              Drive <span className="text-gradient-animate">Legendary.</span><br />
              <span className="text-slate-400">Explore Philly.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Featuring the <span className="text-white font-medium italic underline underline-offset-8 decoration-gold-500/50">Polaris Slingshot</span> and a curated fleet of luxury vehicles. Fast booking, fully insured, and ready when you are.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#fleet" className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center">
              Reserve Your Ride
            </a>
            <a href="#fleet" className="px-8 py-4 glass hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center">
              View Exotic Fleet
            </a>
          </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 md:space-x-8 text-slate-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
              <span className="shrink-0">Center City</span>
              <div className="w-1 h-1 bg-white/20 rounded-full shrink-0" />
              <span className="shrink-0">PHL Airport</span>
              <div className="w-1 h-1 bg-white/20 rounded-full shrink-0" />
              <span className="shrink-0">24/7 Support</span>
            </div>
          </motion.div>

          {/* Floater Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block flex-1 relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="relative glass p-4 rounded-[2.5rem] border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvrPkw6vWS7dsbWVluh8uzatVcpPj8IcAEITC1yMNGihkByKxmZRGhEzhMzIy41Q7dEqbg3Fr4kjPeoMGGWOsHnH_OPE88VqIKTcEI9yNNZJQ90uYB9d5mx8fQ2-1Cm2592yl5Gg=s1470-w784-h1470-rw"
                alt="Polaris Slingshot Philly Car Rental"
                className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 glass-gold p-6 rounded-2xl border border-gold-500/20 shadow-2xl backdrop-blur-xl">
                <p className="text-[10px] font-mono text-gold-500 uppercase tracking-widest mb-1">Exclusive To Philly</p>
                <p className="text-2xl font-bold font-display text-white">POLARIS SLINGSHOT</p>
                <p className="text-slate-400 text-xs mt-2">$149 / Day • 2 Seats • Roadster</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
