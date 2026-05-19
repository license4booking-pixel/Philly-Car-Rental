import { motion } from 'motion/react';
import { Clock, ArrowUpRight, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="bg-grid absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold-500 mb-4 block">Our Journal</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Philly <span className="text-gradient-animate">Travel Tips</span> & Car Rental Insights
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="flex items-center text-sm font-semibold text-white hover:text-gold-500 transition-colors group">
              View All Posts
              <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gold-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col glass overflow-hidden rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <Link to={`/blog/${post.id}`} className="relative h-64 overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 glass-gold rounded-full text-[10px] font-mono text-gold-500 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-500 text-xs font-mono mb-4 space-x-4">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link to={`/blog/${post.id}`} className="text-sm font-semibold text-white hover:text-gold-500 transition-colors flex items-center group/btn">
                    Read Article
                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-50 group-hover/btn:opacity-100 transform translate-y-1 -translate-x-1 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all" />
                  </Link>
                  <div className="flex items-center space-x-3">
                    <button className="p-1.5 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-400" title="Share on Twitter">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-400" title="Share on Facebook">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-400" title="Share on LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
