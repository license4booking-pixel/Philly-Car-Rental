import { motion } from 'motion/react';
import { Car, Clock, CreditCard, ShieldCheck, MapPin, Zap } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: "Wide Vehicle Selection",
    description: "From economy to luxury, find the perfect ride for your needs in Philadelphia."
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Our local team is always available to assist you during your rental period."
  },
  {
    icon: CreditCard,
    title: "Easy Online Booking",
    description: "Reserve your car in minutes with our fast, secure, and intuitive booking system."
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Vehicles",
    description: "Drive with peace of mind knowing all our vehicles come with comprehensive coverage."
  },
  {
    icon: MapPin,
    title: "Local Philadelphia Service",
    description: "Proudly serving the Philly area with insider local knowledge and support."
  },
  {
    icon: Zap,
    title: "Fast Pickup & Drop-off",
    description: "Skip the long counter lines and get straight to driving with expedited processing."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Why Philly Car Rental is <span className="text-gold-500">Trusted</span> in Philadelphia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            As the <strong className="font-medium text-slate-300">best car rental Philadelphia</strong> has to offer, we pride ourselves on being a <strong className="font-medium text-slate-300">trusted Philly car rental service</strong>. We provide <strong className="font-medium text-slate-300">reliable car rental in Philadelphia</strong> focusing on exceptional customer experience, premium vehicles, and transparent pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl glass border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:border-gold-400 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold-500 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
