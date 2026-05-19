import { motion } from 'motion/react';
import { Clock, ArrowUpRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Philadelphia Travel Tips",
    excerpt: "Discover the best ways to navigate the City of Brotherly Love, from hidden historical gems to the best cheesesteak spots.",
    category: "Travel Guide",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542204172-55bb3f647748?q=80&w=2942&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Car Rental Advice: How to Choose the Right Vehicle",
    excerpt: "Should you go for an economy sedan or a luxury SUV? Our experts weigh in on choosing the perfect car for your Philly trip.",
    category: "Expert Advice",
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Hidden Gems in Philadelphia You Can Only Reach by Car",
    excerpt: "Venture beyond Center City and explore the beautiful parks and historic neighborhoods surrounding metropolitan Philadelphia.",
    category: "Road Trips",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571210862729-ef8a653fd048?q=80&w=2940&auto=format&fit=crop"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="bg-grid absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col glass overflow-hidden rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
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
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-500 text-xs font-mono mb-4 space-x-4">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <button className="text-sm font-semibold text-white group-hover:text-gold-500 transition-colors flex items-center">
                    Read Article
                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
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
