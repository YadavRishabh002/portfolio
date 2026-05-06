import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border-blue-500/30 text-blue-400 text-sm font-medium w-max">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Rishabh Yadav</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            A Computer Science student aspiring to become a Software Developer specialized in AI and ML.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-slate-700 text-white rounded-full font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex gap-6 mt-8 items-center">
            <span className="text-slate-500 text-sm font-medium">Follow Me:</span>
            <div className="flex gap-4">
              <a href="https://github.com/YadavRishabh002" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishabh-yadav-4792001b9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:yadavrishabh002@gmail.com" className="text-slate-400 hover:text-rose-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          {/* Decorative geometric elements instead of an image, or a placeholder */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[2rem] rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 glass-card rounded-[2rem] -rotate-3 overflow-hidden flex items-center justify-center border-white/10">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-blue-400/30">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CS Student</h3>
                <p className="text-blue-400">BML Munjal University</p>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
