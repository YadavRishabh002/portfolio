import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: 'Python for Data Science',
      issuer: 'Coursera',
      year: '2025',
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: 'Figma Components',
      issuer: 'Design Platform',
      year: '2024',
      icon: <Award className="text-rose-400" size={24} />
    },
    {
      title: 'Canva Persona & Storyboard',
      issuer: 'Design Platform',
      year: '2024',
      icon: <Award className="text-amber-400" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & <span className="text-blue-500">Certifications</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-amber-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Milestones</h3>
            </div>
            
            <div className="glass-card p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -z-10 group-hover:bg-amber-500/20 transition-colors"></div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-full bg-amber-500/20 border border-amber-500/30">
                  <Medal className="text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Esports Tournament Organizer</h4>
                  <p className="text-blue-400 font-medium mb-3">Sierra Club</p>
                  <p className="text-slate-400 leading-relaxed">
                    Successfully organized and managed a competitive esports tournament, demonstrating leadership, event planning, and team coordination skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-blue-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-5 flex items-center justify-between hover:-translate-y-1 transition-transform cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-dark border border-slate-700">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{cert.title}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-dark rounded-full text-xs font-medium text-slate-300 border border-slate-800">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
