import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Career Objective</h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I am a disciplined and observant Computer Science student aspiring to become a <span className="text-white font-medium">Software Developer specialized in AI and ML</span>.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My journey is driven by a deep focus on continuous technical growth, leadership, and solving complex problems through elegant code and intelligent algorithms.
            </p>
            
            <div className="mt-8 flex gap-4">
              <div className="bg-dark/50 px-4 py-3 rounded-xl border border-slate-700/50">
                <p className="text-blue-400 font-bold text-xl">2028</p>
                <p className="text-sm text-slate-400">Graduation Year</p>
              </div>
              <div className="bg-dark/50 px-4 py-3 rounded-xl border border-slate-700/50">
                <p className="text-blue-400 font-bold text-xl">4+</p>
                <p className="text-sm text-slate-400">Projects Built</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Learner</h4>
                <p className="text-slate-400 leading-relaxed">
                  Passionate about keeping up with the latest advancements in technology, specifically exploring AI models and data structures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 mt-1">
                <span className="text-indigo-400 font-bold">2</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Problem Solver</h4>
                <p className="text-slate-400 leading-relaxed">
                  Strong analytical skills developed through building full-stack applications, data models, and IoT integrations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 mt-1">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Team Player</h4>
                <p className="text-slate-400 leading-relaxed">
                  Experienced in collaborative environments, having organized esports tournaments and working on team-based academic projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
