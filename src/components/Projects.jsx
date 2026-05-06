import { motion } from 'framer-motion';
import { ExternalLink, Activity, BookOpen, BarChart3, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Thryve',
      date: 'Feb 2026 – Present',
      description: 'A comprehensive Fitness & Health Tracker app that helps users monitor their physical activities and wellness routines.',
      features: ['Real-time tracking', 'User authentication', 'Route visualization'],
      tech: ['Android Studio', 'Java', 'Firebase', 'Google Maps API'],
      icon: <Activity className="text-rose-400" size={32} />,
      color: 'from-rose-500/20 to-rose-600/5',
      borderColor: 'border-rose-500/20'
    },
    {
      title: 'OpenLearn Hub',
      date: 'Sep 2025 – Nov 2025',
      description: 'An engaging learning resource platform designed to provide a distraction-free environment for students.',
      features: ['Categorized browsing', 'Distraction-free UI', 'Resource management'],
      tech: ['HTML', 'CSS', 'JS', 'Node.js', 'MongoDB'],
      icon: <BookOpen className="text-blue-400" size={32} />,
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Sales Data Analysis',
      date: 'Oct 2025 – Dec 2025',
      description: 'A data science project involving comprehensive exploratory data analysis (EDA) and predictive modeling for sales data.',
      features: ['Exploratory Data Analysis (EDA)', 'Regression modeling (81% accuracy)'],
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      icon: <BarChart3 className="text-emerald-400" size={32} />,
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'border-emerald-500/20'
    },
    {
      title: 'Smart Home Integration',
      date: 'Oct 2025 – Dec 2025',
      description: 'An IoT-based system allowing remote control and monitoring of household appliances for smart living.',
      features: ['Remote appliance control', 'Sensor integration', 'Hardware-software sync'],
      tech: ['Arduino', 'Embedded C/C++', 'IoT'],
      icon: <Cpu className="text-purple-400" size={32} />,
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'border-purple-500/20'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-blue-500">Projects</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work across mobile development, full-stack web applications, data science, and IoT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card overflow-hidden flex flex-col group border ${project.borderColor}`}
            >
              <div className={`p-8 bg-gradient-to-br ${project.color} border-b border-white/5 relative`}>
                <div className="absolute top-4 right-4 text-xs font-medium px-3 py-1 bg-dark/50 rounded-full border border-white/10 text-slate-300">
                  {project.date}
                </div>
                <div className="mb-4 bg-dark/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-blue-500 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-dark rounded-md text-xs font-medium text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-slate-800">
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <FaGithub size={16} />
                      Source Code
                    </a>
                    {project.title === 'OpenLearn Hub' && (
                      <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
