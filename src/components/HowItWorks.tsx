import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Choose Your Car",
    description: "Browse our Philly car rental fleet and select your perfect vehicle for the trip."
  },
  {
    number: "02",
    title: "Book Online",
    description: "Enter your pickup dates, drop-off details, and confirm your reservation instantly."
  },
  {
    number: "03",
    title: "Drive Away",
    description: "Pick up your car at our convenient Philadelphia location and start driving."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/50 blur-[80px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            How to Rent a Car in Philadelphia <br />
            <span className="text-slate-400 text-3xl md:text-4xl">(Simple 3 Steps)</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center"
              >
                <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gold-500/10 rounded-full animate-pulse-slow" />
                  <div className="absolute inset-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md" />
                  <span className="relative z-10 text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-yellow-600">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
