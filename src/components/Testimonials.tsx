import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James R.",
    initials: "JR",
    quote: "Best car rental in Philadelphia. Super easy booking and clean cars.",
    verified: true
  },
  {
    name: "Sarah M.",
    initials: "SM",
    quote: "Affordable prices and excellent service. Highly recommend Philly Car Rental.",
    verified: true
  },
  {
    name: "David L.",
    initials: "DL",
    quote: "Luxury cars at great prices. Pickup was fast and smooth.",
    verified: true
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            What Customers Say About <span className="text-gold-500">Philly</span> Car Rental
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative"
            >
              <div className="flex text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-slate-300 italic mb-8">
                "{t.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-lg border border-white/10 mr-4">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  {t.verified && (
                    <span className="text-xs text-emerald-400 font-medium flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Customer
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
