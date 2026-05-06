import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-darker pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-2xl font-bold text-white tracking-tighter w-fit">
              Rishabh<span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Aspiring Software Developer focused on creating elegant solutions through code and exploring the possibilities of AI/ML.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Me</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Skills</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#education" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Education</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/YadavRishabh002" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-white hover:text-dark transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishabh-yadav-4792001b9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:yadavrishabh002@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-rose-500 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Rishabh Yadav. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-rose-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
