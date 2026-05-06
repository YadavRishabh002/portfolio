import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B-Tech, Computer Science and Engineering',
      institution: 'BML Munjal University',
      period: '2024 – 2028',
      score: 'CGPA: 6.42',
      icon: <GraduationCap size={24} className="text-blue-500" />
    },
    {
      degree: 'CBSE 12th',
      institution: 'Acharyakulam, Haridwar',
      period: 'Completed',
      score: 'Percentage: 70%',
      icon: <School size={24} className="text-indigo-500" />
    },
    {
      degree: 'CBSE 10th',
      institution: 'Acharyakulam, Haridwar',
      period: 'Completed',
      score: 'Percentage: 85.8%',
      icon: <School size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-900/20 relative">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-500">Education</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 pl-8 md:pl-12 relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-dark border-4 border-slate-800 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                </div>

                <div className="glass-card p-6 md:p-8 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      <p className="text-slate-400 mt-1 flex items-center gap-2">
                        {item.icon}
                        {item.institution}
                      </p>
                    </div>
                    <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                    <span className="text-slate-300 font-medium">Performance:</span>
                    <span className="text-white font-bold">{item.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
