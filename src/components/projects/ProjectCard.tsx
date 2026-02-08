import React from 'react';
import type { Project } from './types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const StatusIndicator: React.FC<{ status: Project['status'] }> = ({ status }) => {
    const statusConfig = {
        ACTIVE: { color: 'bg-emerald-400', label: 'ONLINE' },
        WIP: { color: 'bg-amber-400', label: 'IN_DEV' },
        ARCHIVED: { color: 'bg-zinc-500', label: 'ARCHIVED' },
    };
    const config = statusConfig[status];

    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${config.color} animate-pulse`} />
            <span className="text-xs font-mono text-blue-slate">{config.label}</span>
        </div>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                group relative overflow-hidden rounded-xl
                bg-coffee-bean
                border border-blue-slate/30
                p-6 min-h-[280px]
                flex flex-col text-left w-full
                transition-[border-color,box-shadow,transform] duration-300 ease-out
                hover:border-blue-slate
                hover:shadow-[0_0_20px_rgba(106,115,152,0.3)]
                cursor-pointer
            "
            style={{ willChange: 'border-color, box-shadow, transform' }}
        >


            {/* Header */}
            <div className="flex justify-between items-start mb-4 relative z-10">
                <p className="text-sm font-mono text-blue-slate font-bold">{project.id}</p>
                <StatusIndicator status={project.status} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-dust-grey mb-3 relative z-10">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-dust-grey/70 mb-6 flex-grow relative z-10">
                {project.description}
            </p>

            {/* Tags - Limited to 2 to maintain symmetry */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tags.slice(0, 2).map((tag) => (
                    <span
                        key={tag}
                        className="
                            px-2 py-1
                            text-xs font-mono
                            bg-blue-slate/10 text-blue-slate
                            border border-blue-slate/30
                            rounded
                        "
                    >
                        {tag}
                    </span>
                ))}
                {project.tags.length > 3 && (
                    <span className="
                        px-2 py-1
                        text-xs font-mono
                        text-blue-slate/60
                        border border-transparent
                        rounded
                    ">
                        +{project.tags.length - 3}
                    </span>
                )}
            </div>

            {/* View Details hint */}
            <div className="flex gap-4 pt-4 border-t border-blue-slate/20 relative z-10">
                <span className="
                    text-xs font-mono text-blue-slate/60
                    group-hover:text-blue-slate transition-colors
                ">
                    [ CLICK_TO_EXPAND ]
                </span>
            </div>
        </button>
    );
};

export default ProjectCard;

