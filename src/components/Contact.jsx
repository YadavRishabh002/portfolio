import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900/20 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-blue-500">Touch</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-6 flex items-start gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-slate-400">+91-9027115199</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 rounded-full bg-rose-500/10 text-rose-400 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <a href="mailto:yadavrishabh002@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  yadavrishabh002@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-slate-400">BML Munjal University, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="bg-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="bg-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="bg-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Write your message here..."
                  className="bg-dark/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
