import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 border-y border-white/5 relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-center">
            <span className="text-gradient-animate">Affordable</span> Philly Car Rental Pricing
          </h2>
          <p className="text-slate-400 text-lg text-center">
            Whether you need <strong className="font-medium text-slate-300">affordable car rental Philly</strong> options for getting around town, or a <strong className="font-medium text-slate-300">luxury car rental Philadelphia pricing</strong> experience, we have you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Economy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-2">Economy</h3>
            <p className="text-slate-400 mb-6 min-h-[48px]">Cheapest rental options in Philadelphia</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$50</span>
              <span className="text-slate-400">/day</span>
              <p className="text-sm mt-2 text-slate-500">From</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Basic insurance included</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Unlimited miles option</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Standard roadside assistance</span>
              </li>
            </ul>
            
            <a href="#quick-booking" className="w-full py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold border border-white/10 transition-all duration-300 text-center">
              Select Economy
            </a>
          </motion.div>

          {/* Standard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-gold border border-gold-500/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_50px_rgba(245,158,11,0.1)] relative flex flex-col transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-slate-950 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-2 text-gold-500">Standard</h3>
            <p className="text-slate-400 mb-6 min-h-[48px]">Best balance of comfort & price in Philly</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$80</span>
              <span className="text-slate-400">/day</span>
              <p className="text-sm mt-2 text-slate-500">From</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Intermediate to Full-size</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Comprehensive insurance</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Unlimited mileage</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Free cancellation</span>
              </li>
            </ul>
            
            <a href="#quick-booking" className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 text-center">
              Select Standard
            </a>
          </motion.div>

          {/* Luxury */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-2">Luxury</h3>
            <p className="text-slate-400 mb-6 min-h-[48px]">Executive experience & premium vehicles</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$120</span>
              <span className="text-slate-400">/day</span>
              <p className="text-sm mt-2 text-slate-500">From</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Premium SUVs & Sedans</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>VIP concierge service</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Premium insurance coverage</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span>Priority vehicle pickup</span>
              </li>
            </ul>
            
            <a href="#quick-booking" className="w-full py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold border border-white/10 transition-all duration-300 text-center">
              Select Luxury
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#booking" className="inline-flex items-center justify-center text-gold-500 hover:text-gold-400 font-medium group text-lg transition-colors">
            Check Availability in Philadelphia 
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
