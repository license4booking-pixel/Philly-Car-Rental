import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Twitter, Facebook, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Navbar } from '../components/Navbar';
import { FinalCta } from '../components/FinalCta';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <Link to="/#blog" className="text-gold-500 hover:text-gold-400">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-gold-500/30 overflow-x-hidden pt-24">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/#blog" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-gold-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-gold-500/10 text-gold-500 rounded-full text-xs font-mono uppercase tracking-wider border border-gold-500/20">
              {post.category}
            </span>
            <div className="flex items-center text-slate-400 text-sm font-mono">
              <span>{post.date}</span>
              <div className="w-1 h-1 rounded-full bg-slate-700 mx-3" />
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                {post.readTime}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-white/10 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                <span className="text-gold-500 font-bold">PR</span>
              </div>
              <div>
                <p className="font-medium text-white">Philly Car Rental Team</p>
                <p className="text-sm text-slate-400">Content Editors</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-400 mr-2 hidden sm:inline">Share:</span>
              <button className="p-2 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-300" title="Share on Twitter">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-300" title="Share on Facebook">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/5 hover:bg-gold-500 hover:text-slate-950 transition-colors text-slate-300" title="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 h-[500px] rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-display prose-headings:text-white prose-a:text-gold-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
        >
          <p className="lead text-xl text-slate-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </motion.div>
      </main>

      <FinalCta />
    </div>
  );
}
