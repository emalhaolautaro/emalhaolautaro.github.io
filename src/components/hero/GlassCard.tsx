import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    /** Maximum width - default: 'max-w-lg' */
    maxWidth?: string;
    /** Padding - default: 'p-8 md:p-12' */
    padding?: string;
}

/**
 * GlassCard - Reusable glassmorphism container
 * Provides a frosted glass effect with customizable sizing
 */
const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    maxWidth = 'max-w-lg',
    padding = 'p-12 md:p-18'
}) => {
    return (
        <div
            className={`
                ${maxWidth} ${padding} mx-auto w-full
                bg-black/20 backdrop-blur-lg
                border border-white/10 rounded-[2rem]
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                transition-all duration-500 hover:border-white/20
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default GlassCard;
