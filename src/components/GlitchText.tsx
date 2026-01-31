import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
    glitchDuration?: number;
}

/**
 * GlitchText - Digital glitch effect on mount
 * Creates a rapid "broken signal" appearance before stabilizing
 */
const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    className = '',
    glitchDuration = 1200
}) => {
    const [isGlitching, setIsGlitching] = useState(true);
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Glitch characters pool - corrupted data aesthetic
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄';

    useEffect(() => {
        let elapsed = 0;
        const glitchInterval = 50;

        intervalRef.current = setInterval(() => {
            elapsed += glitchInterval;

            // Progressively reveal more correct characters
            const progress = elapsed / glitchDuration;
            const correctChars = Math.floor(text.length * progress);

            const newText = text
                .split('')
                .map((char, i) => {
                    if (i < correctChars) return char;
                    if (char === ' ') return ' ';
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');

            setDisplayText(newText);

            if (elapsed >= glitchDuration) {
                setDisplayText(text);
                setIsGlitching(false);
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        }, glitchInterval);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, glitchDuration]);

    return (
        <motion.span
            className={`relative inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
        >
            {/* Main text */}
            <span className={isGlitching ? 'glitch-active' : ''}>
                {displayText}
            </span>

            {/* Glitch overlay layers */}
            {isGlitching && (
                <>
                    <span
                        className="absolute inset-0 text-accent/80 animate-glitch-1"
                        style={{ clipPath: 'inset(20% 0 30% 0)' }}
                        aria-hidden="true"
                    >
                        {displayText}
                    </span>
                    <span
                        className="absolute inset-0 text-red-500/60 animate-glitch-2"
                        style={{ clipPath: 'inset(60% 0 10% 0)' }}
                        aria-hidden="true"
                    >
                        {displayText}
                    </span>
                </>
            )}
        </motion.span>
    );
};

export default GlitchText;
