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
                bg-coffee-bean
                border border-blue-slate/20 rounded-xl
                shadow-none
                transition-all duration-500
                hover:border-blood-red hover:shadow-[0_0_15px_rgba(145,12,12,0.4)]
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default GlassCard;
