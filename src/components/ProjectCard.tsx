import { motion } from 'framer-motion';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isLarge = project.size === 'large';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`
        relative overflow-hidden group
        ${isLarge ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}
        rounded-[2rem] border border-white/5
        bg-gradient-to-br from-white/[0.08] to-transparent
        backdrop-blur-2xl
        p-8 transition-shadow duration-500
        hover:shadow-[0_20px_50px_-20px_rgba(0,255,65,0.15)]
      `}
    >
      {/* Efecto de borde iluminado al hacer hover */}
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/20 rounded-[2rem] transition-colors duration-500" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <header>
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent/60 uppercase">
              {project.subtitle}
            </span>
          </div>
          <h3 className="text-3xl font-bold mt-3 mb-4 tracking-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base antialiased">
            {project.description}
          </p>
        </header>

        <footer className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-gray-400 group-hover:text-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectCard;