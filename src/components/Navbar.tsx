import { motion } from 'motion/react';
import { Phone, Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-110">
            <img 
              src="https://i.imgur.com/fgugvVm.png" 
              alt="Philly Car Rental Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">
            PHILLY <span className="text-gold-500">CAR RENTAL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/#fleet" className="text-sm font-medium text-slate-300 hover:text-gold-500 transition-colors">Fleet</a>
          <a href="/#how-it-works" className="text-sm font-medium text-slate-300 hover:text-gold-500 transition-colors">How It Works</a>
          <a href="/#pricing" className="text-sm font-medium text-slate-300 hover:text-gold-500 transition-colors">Pricing</a>
          <a href="/#blog" className="text-sm font-medium text-slate-300 hover:text-gold-500 transition-colors">Blog</a>
          
          <div className="h-4 w-[1px] bg-white/10" />
          
          <a 
            href="https://www.instagram.com/phillycarrentals?igsh=bm9jbG9xbnpwZWdo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-gold-500 transition-colors p-2"
          >
            <Instagram className="w-5 h-5" />
          </a>
          
          <a href="tel:+12674036640" className="flex items-center text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +1 267-403-6640
          </a>
          
          <button className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 glass border-b border-white/10 p-6 flex flex-col space-y-4"
        >
          <a href="/#fleet" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Fleet</a>
          <a href="/#how-it-works" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="/#pricing" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="/#blog" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          
          <a 
            href="https://www.instagram.com/phillycarrentals?igsh=bm9jbG9xbnpwZWdo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Instagram className="w-5 h-5 mr-3 text-gold-500" />
            Instagram
          </a>

          <a href="tel:+12674036640" className="flex items-center text-lg font-bold text-gold-500">
            <Phone className="w-5 h-5 mr-3" />
            +1 267-403-6640
          </a>
          <button className="w-full py-4 bg-gold-500 text-slate-950 font-bold rounded-xl text-center">
            Book Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
