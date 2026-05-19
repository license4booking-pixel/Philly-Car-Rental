/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCars } from './components/FeaturedCars';
import { Pricing } from './components/Pricing';
import { AiReceptionist } from './components/AiReceptionist';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { LocalSeo } from './components/LocalSeo';
import { FinalCta } from './components/FinalCta';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-gold-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <AiReceptionist />
      <BlogSection />
      <Testimonials />
      <LocalSeo />
      <FinalCta />
      
      {/* Universal Floating Call Button for Mobile */}
      <motion.a 
        href="tel:+12674036640"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold-500 text-slate-950 rounded-full flex items-center justify-center shadow-xl border border-white/20"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
