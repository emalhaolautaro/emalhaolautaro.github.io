import React, { useState, useEffect, useCallback } from 'react';
import type { Project } from './types';
import { FaFilePdf } from 'react-icons/fa6';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when modal opens with new project
    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
        }
    }, [isOpen, project]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const nextImage = useCallback(() => {
        if (project?.images) {
            setCurrentImageIndex((prev) =>
                prev === project.images!.length - 1 ? 0 : prev + 1
            );
        }
    }, [project]);

    const prevImage = useCallback(() => {
        if (project?.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.images!.length - 1 : prev - 1
            );
        }
    }, [project]);

    if (!isOpen || !project) return null;

    const hasImages = project.images && project.images.length > 0;
    const hasMultipleImages = project.images && project.images.length > 1;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark-obsidian/90 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className="
                    relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
                    bg-coffee-bean/95 backdrop-blur-xl
                    border border-blue-slate/30
                    rounded-2xl
                    shadow-[0_0_50px_rgba(106,115,152,0.2)]
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
                        absolute top-4 right-4 z-20
                        w-10 h-10 flex items-center justify-center
                        text-dust-grey/70 hover:text-dust-grey
                        bg-dark-obsidian/50 hover:bg-dark-obsidian/80
                        border border-blue-slate/20 hover:border-blue-slate/40
                        rounded-lg transition-all duration-200
                    "
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Gallery */}
                {hasImages && (
                    <div className="relative w-full aspect-video bg-dark-obsidian/50 overflow-hidden rounded-t-2xl">
                        <picture>
                            {/* AVIF - best compression */}
                            {project.images![currentImageIndex].srcAvif && (
                                <source
                                    srcSet={project.images![currentImageIndex].srcAvif}
                                    type="image/avif"
                                />
                            )}
                            {/* WebP - good compression, wide support */}
                            {project.images![currentImageIndex].srcWebp && (
                                <source
                                    srcSet={project.images![currentImageIndex].srcWebp}
                                    type="image/webp"
                                />
                            )}
                            {/* If src is already webp, add it as source too */}
                            {project.images![currentImageIndex].src.endsWith('.webp') && (
                                <source
                                    srcSet={project.images![currentImageIndex].src}
                                    type="image/webp"
                                />
                            )}
                            {/* Fallback img - always rendered */}
                            <img
                                src={project.images![currentImageIndex].src}
                                alt={project.images![currentImageIndex].alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>

                        {/* Image Navigation */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="
                                        absolute left-4 top-1/2 -translate-y-1/2
                                        w-10 h-10 flex items-center justify-center
                                        bg-dark-obsidian/70 hover:bg-dark-obsidian/90
                                        text-dust-grey border border-blue-slate/30
                                        rounded-full transition-all
                                    "
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="
                                        absolute right-4 top-1/2 -translate-y-1/2
                                        w-10 h-10 flex items-center justify-center
                                        bg-dark-obsidian/70 hover:bg-dark-obsidian/90
                                        text-dust-grey border border-blue-slate/30
                                        rounded-full transition-all
                                    "
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Dots Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {project.images!.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`
                                                w-2 h-2 rounded-full transition-all
                                                ${idx === currentImageIndex
                                                    ? 'bg-blue-slate w-4'
                                                    : 'bg-dust-grey/40 hover:bg-dust-grey/60'
                                                }
                                            `}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Image Caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-obsidian/80 to-transparent p-4 pt-8">
                            <p className="text-xs font-mono text-dust-grey/70">
                                {project.images![currentImageIndex].alt}
                            </p>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 pr-12">
                        <div>
                            <p className="text-sm font-mono text-blue-slate font-bold mb-2">
                                {project.id}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-dust-grey">
                                {project.title}
                            </h2>
                        </div>
                        <StatusBadge status={project.status} />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                                    px-3 py-1.5
                                    text-xs font-mono
                                    bg-blue-slate/10 text-blue-slate
                                    border border-blue-slate/30
                                    rounded
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="prose prose-invert max-w-none mb-8">
                        {(project.longDescription || project.description).split('\n\n').map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-dust-grey/80 leading-relaxed mb-4 last:mb-0"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-6 border-t border-blue-slate/20">
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center gap-2
                                    px-5 py-2.5
                                    bg-blue-slate/10 hover:bg-blue-slate/20
                                    text-blue-slate hover:text-dust-grey
                                    border border-blue-slate/30 hover:border-blue-slate/50
                                    rounded-lg font-mono text-sm
                                    transition-all duration-200
                                "
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>[ VIEW_SOURCE ]</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center gap-2
                                    px-5 py-2.5
                                    bg-blue-slate/10 hover:bg-blue-slate/20
                                    text-blue-slate hover:text-dust-grey
                                    border border-blue-slate/30 hover:border-blue-slate/50
                                    rounded-lg font-mono text-sm
                                    transition-all duration-200
                                "
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>[ LIVE_DEMO ]</span>
                            </a>
                        )}
                        {project.pdfUrl && (
                            <a
                                href={project.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center gap-2
                                    px-5 py-2.5
                                    bg-blue-slate/10 hover:bg-blue-slate/20
                                    text-blue-slate hover:text-dust-grey
                                    border border-blue-slate/30 hover:border-blue-slate/50
                                    rounded-lg font-mono text-sm
                                    transition-all duration-200
                                "
                            >
                                <FaFilePdf className="w-4 h-4" />
                                <span>[ READ_PAPER ]</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Status Badge Component
const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
    const statusConfig = {
        ACTIVE: { color: 'bg-emerald-400', textColor: 'text-emerald-400', label: 'ONLINE' },
        WIP: { color: 'bg-amber-400', textColor: 'text-amber-400', label: 'IN_DEV' },
        ARCHIVED: { color: 'bg-zinc-500', textColor: 'text-zinc-500', label: 'ARCHIVED' },
    };
    const config = statusConfig[status];

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-obsidian/50 border border-blue-slate/20 rounded-lg">
            <div className={`w-2 h-2 rounded-full ${config.color} animate-pulse`} />
            <span className={`text-xs font-mono ${config.textColor}`}>{config.label}</span>
        </div>
    );
};

export default ProjectModal;
