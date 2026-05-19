import { motion } from 'motion/react';
import { Calendar, Car, ArrowRight, Phone } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-full bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-md overflow-hidden relative">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600">Philly</span> Car Rental?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-md">
                Don't wait. Secure your luxury or affordable ride today and experience the best car rental service in Philadelphia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#quick-booking" className="flex justify-center items-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  Book Your Car Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="tel:+12674036640" className="flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-medium rounded-xl transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5 text-gold-500" />
                  Call +1 267-403-6640
                </a>
              </div>
            </motion.div>

            <motion.div 
              id="quick-booking"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 font-display">Quick Booking</h3>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 block">Pickup Date & Time</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="datetime-local" 
                      className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all [color-scheme:dark]" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 block">Return Date & Time</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="datetime-local" 
                      className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 block">Car Type</label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <select className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none cursor-pointer">
                      <option value="">Show All Vehicles</option>
                      <option value="economy">Economy - from $50/day</option>
                      <option value="standard">Standard - from $80/day</option>
                      <option value="luxury">Luxury - from $120/day</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-xl transition-colors">
                    Check Availability
                  </button>
                </div>
              </form>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
