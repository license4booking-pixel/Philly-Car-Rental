import { motion } from 'motion/react';
import { MapPin, Phone, Star, ArrowUpRight } from 'lucide-react';

export function LocalSeo() {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 border border-white/10 mb-6">
              <MapPin className="w-5 h-5 text-gold-500" />
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">Based in Philadelphia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Your Local <span className="text-gradient-animate">Iconic Service</span> in Philadelphia
            </h2>
            
            <div className="prose prose-invert prose-p:text-slate-400 prose-p:leading-relaxed max-w-none">
              <p>
                When you need a <strong className="text-white font-semibold italic">car rental Philadelphia</strong> locals and visitors trust, Philly Car Rental is your premier choice. We provide a top-tier <strong className="text-white font-semibold">Philly car rental service</strong> designed for maximum convenience and reliability. 
              </p>
              <p>
                Whether you're looking to <strong className="text-white font-semibold">rent a car in Philadelphia</strong> for business in Center City or need a fast, seamless <strong className="text-white font-semibold">Philadelphia airport car rental alternative</strong> without the hidden fees, our local presence means you get on the road faster. Experience reliable, local service right here in the City of Brotherly Love.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-slate-400">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gold-500 mr-2" /> Center City Access
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gold-500 mr-2" /> PHL Airport Delivery
              </div>
              <a href="tel:+12674036640" className="flex items-center text-gold-500 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 267-403-6640
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full relative group"
          >
            {/* Embedded Google Map */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="h-[450px] w-full rounded-3xl bg-slate-800 border border-white/10 overflow-hidden relative shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0772421319247!2d-75.143242624231!3d39.9619189715152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c879374092b7%3A0xe54e6097151513!2sPhilly%20Car%20Rental!5e0!3m2!1sen!2sus!4v1716100000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Philly Car Rental Location"
              ></iframe>
            </motion.div>
            
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-gold-500/20 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center space-x-2 text-gold-500 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-white font-bold ml-2">4.9/5</span>
              </div>
              <p className="text-xs text-slate-400">Based on 500+ Google Reviews</p>
            </div>
          </motion.div>

        </div>

        {/* Reviews Section */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-2">What Our Neighbors Say</h3>
            <p className="text-slate-400 text-sm italic">"Highly rated for our exotic fleet and seamless process"</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Robert K.", review: "The Slingshot was an absolute blast for our anniversary. Highly recommend!", rating: 5 },
              { name: "Angela T.", review: "Professional service, clean cars, and very transparent pricing. Best in Philly.", rating: 5 },
              { name: "Michael S.", review: "Excellent communication. The AI assistant made the booking very fast.", rating: 5 },
              { name: "Linda P.", review: "Loved the selection. The Polaris was the highlight of our weekend trip.", rating: 5 }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="flex text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">"{review.review}"</p>
                <p className="text-white text-xs font-bold">— {review.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://share.google/FGyVvuuqrwMHxuaUu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
            >
              See All Google Reviews
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
