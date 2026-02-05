import React, { useState, Suspense } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS, type Project } from './types';

const ProjectModal = React.lazy(() => import('./ProjectModal'));

const ProjectSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Delay clearing selected project for exit animation
        setTimeout(() => setSelectedProject(null), 200);
    };

    return (
        <section
            className="relative z-10 py-24 px-4 flex flex-col items-center min-h-screen bg-coffee-bean"
        >
            {/* Subtle blue gradient overlay */}
            <div
                className="
                    absolute inset-0
                    bg-[radial-gradient(ellipse_at_top_right,_rgba(106,115,152,0.08)_0%,_transparent_60%)]
                    pointer-events-none
                "
            />
            <div
                className="
                    absolute inset-0
                    bg-[radial-gradient(ellipse_at_bottom_left,_rgba(106,115,152,0.05)_0%,_transparent_50%)]
                    pointer-events-none
                "
            />

            {/* Section Title */}
            <div className="max-w-7xl w-full mx-auto text-center mb-24 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-dust-grey tracking-wider">
                    PROJECTS
                </h2>
                <p className="mt-4 text-sm font-mono text-blue-slate">
                    [ SYSTEM_REGISTRY // ACTIVE_DEPLOYMENTS ]
                </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="w-full max-w-sm">
                        <ProjectCard
                            project={project}
                            onClick={() => openModal(project)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Suspense fallback={null}>
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </Suspense>
        </section>
    );
};

export default ProjectSection;

