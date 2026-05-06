import { motion } from 'framer-motion';
import { Smartphone, Code2, Database, Brain, Wrench, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web & Mobile',
      icon: <Smartphone className="text-blue-400" size={24} />,
      skills: ['Android Studio', 'Firebase', 'React', 'HTML', 'CSS']
    },
    {
      title: 'Languages',
      icon: <Code2 className="text-indigo-400" size={24} />,
      skills: ['Python', 'C', 'Java', 'JavaScript']
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="text-purple-400" size={24} />,
      skills: ['MySQL', 'MongoDB', 'SQLite', 'Git', 'Linux']
    },
    {
      title: 'Core Concepts',
      icon: <Brain className="text-rose-400" size={24} />,
      skills: ['OOPS', 'DSA', 'AI/ML Fundamentals']
    },
    {
      title: 'Libraries',
      icon: <Layout className="text-amber-400" size={24} />,
      skills: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib']
    },
    {
      title: 'Other Tools',
      icon: <Wrench className="text-emerald-400" size={24} />,
      skills: ['AutoCAD', 'Cisco Packet Tracer']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-blue-500">Skills</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and technologies I work with to build robust applications.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-dark/50 rounded-lg border border-slate-700/50">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
