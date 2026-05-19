import { motion } from 'motion/react';
import { Users, Fuel, Settings2 } from 'lucide-react';

const cars = [
  {
    name: "Polaris Slingshot",
    price: 149,
    type: "Exotic Roadster",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 2,
    popular: true,
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvrPkw6vWS7dsbWVluh8uzatVcpPj8IcAEITC1yMNGihkByKxmZRGhEzhMzIy41Q7dEqbg3Fr4kjPeoMGGWOsHnH_OPE88VqIKTcEI9yNNZJQ90uYB9d5mx8fQ2-1Cm2592yl5Gg=s1470-w784-h1470-rw"
  },
  {
    name: "Tesla Model 3",
    price: 89,
    type: "Luxury EV",
    transmission: "Auto",
    fuel: "Electric",
    seats: 5,
    popular: true,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2941&auto=format&fit=crop"
  },
  {
    name: "BMW 5 Series",
    price: 110,
    type: "Luxury Sedan",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    popular: false,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "Toyota Camry",
    price: 65,
    type: "Standard",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    popular: true,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=2952&auto=format&fit=crop"
  },
  {
    name: "Dodge Charger",
    price: 95,
    type: "Muscle",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    popular: false,
    image: "https://images.unsplash.com/photo-1626079949666-ac5ebc761c94?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "Ford Mustang",
    price: 120,
    type: "Sports",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 4,
    popular: false,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=2938&auto=format&fit=crop"
  },
  {
    name: "Chevy Malibu",
    price: 60,
    type: "Economy",
    transmission: "Auto",
    fuel: "Gasoline",
    seats: 5,
    popular: false,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2940&auto=format&fit=crop"
  }
];

export function FeaturedCars() {
  return (
    <section id="fleet" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="bg-grid absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold-500 mb-4 block">The Garage</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
            PHILLY <span className="text-gradient-animate">Iconic Fleet</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Luxury & affordable cars in Philadelphia. Experience the adrenaline of our <span className="text-white">Polaris Slingshot</span> or the elegance of our <span className="text-white">BMW 5 Series</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-gold-500/30"
            >
              {car.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gold-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img 
                  src={car.image} 
                  alt={`${car.name} - Philly Car Rental Vehicles`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gold-500 font-medium mb-1">{car.type}</p>
                    <h3 className="text-2xl font-display font-bold text-white">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-white">${car.price}</span>
                    <span className="text-sm text-slate-400">/day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-white/10 mb-6">
                  <div className="flex flex-col items-center justify-center text-slate-400 space-y-1">
                    <Settings2 className="w-5 h-5" />
                    <span className="text-xs font-medium">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-slate-400 space-y-1">
                    <Fuel className="w-5 h-5" />
                    <span className="text-xs font-medium">{car.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-slate-400 space-y-1">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-medium">{car.seats} Seats</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold-500 text-white hover:text-slate-950 font-semibold border border-white/10 hover:border-gold-500 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
