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
                bg-coffee-bean/80 backdrop-blur-xl
                border border-blue-slate/30 rounded-xl
                shadow-none
                transition-[border-color,box-shadow,transform] duration-300 ease-out
                hover:border-accent-teal hover:shadow-[0_0_20px_rgba(74,140,153,0.3)]
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default GlassCard;
