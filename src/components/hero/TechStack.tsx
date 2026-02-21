import React from 'react';
import { motion } from 'framer-motion';
import { TECH_CATEGORIES, SKILL_ICONS } from './techData';

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => {
    const Icon = SKILL_ICONS[skill];

    return (
        <div
            className="
                group relative
                p-2
                bg-coffee-bean/50 border border-blue-slate/20
                rounded-md
                transition-colors duration-200
                hover:border-blood-red hover:bg-blood-red/10
                cursor-default
            "
        >
            {/* Icon */}
            {Icon ? (
                <Icon className="w-6 h-6 text-blue-slate/80 transition-colors duration-300 group-hover:text-eggshell" />
            ) : (
                <span className="text-xs font-mono text-blue-slate/80">[{skill}]</span>
            )}

            {/* Tooltip */}
            <div className="
                absolute -bottom-8 left-1/2 -translate-x-1/2
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                bg-coffee-bean border border-blood-red/30
                text-xs text-eggshell font-mono
                px-2 py-1 rounded
                whitespace-nowrap z-10
                pointer-events-none
            ">
                {skill}
            </div>
        </div>
    );
};

const TechCategory: React.FC<{ title: string; skills: string[]; delay: number }> = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col gap-3"
    >
        <h3 className="text-sm font-mono text-blood-red/80 uppercase tracking-widest border-b border-blood-red/20 pb-1 w-fit">
            {title}
        </h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
            ))}
        </div>
    </motion.div>
);

const TechStack: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 mt-4 md:mt-0 md:pl-8 md:border-l md:border-white/5">
            {TECH_CATEGORIES.map((category) => (
                <TechCategory
                    key={category.title}
                    title={category.title}
                    skills={category.skills}
                    delay={category.delay}
                />
            ))}
        </div>
    );
};

export default TechStack;
