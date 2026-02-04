import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
    timestamp: string;
    message: string;
}

interface TerminalBootProps {
    className?: string;
    typingSpeed?: number;
    lineDelay?: number;
    onBootComplete?: () => void;
}

// kur-os boot sequence - themed around Lautaro's kernel project
const BOOT_SEQUENCE: TerminalLine[] = [
    { timestamp: '0.000000', message: 'Linux version 6.9.0-kur (lautaro@void) #1 SMP PREEMPT_RT' },
    { timestamp: '0.042851', message: 'BIOS-provided physical RAM map:' },
    { timestamp: '0.123456', message: 'Initializing kur-os memory subsystem...' },
    { timestamp: '0.198721', message: 'Memory: 16384K/32768K available' },
    { timestamp: '0.247891', message: 'CPU: Intel(R) Core(TM) i7 @ 4.20GHz' },
    { timestamp: '0.312456', message: 'Loading firmware: kur-os/core.bin' },
    { timestamp: '0.389012', message: 'Mounting root filesystem...' },
    { timestamp: '0.456789', message: 'Starting system services...' },
];

/**
 * TerminalBoot - Simulated Linux kernel boot sequence
 * Typewriter effect with realistic timestamps
 * Calls onBootComplete when finished
 */
const TerminalBoot: React.FC<TerminalBootProps> = ({
    className = '',
    typingSpeed = 15,
    lineDelay = 80,
    onBootComplete
}) => {
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const [currentLineText, setCurrentLineText] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visibleLines >= BOOT_SEQUENCE.length) {
            setIsTyping(false);
            if (onBootComplete) {
                setTimeout(() => onBootComplete(), 800);
            }
            return;
        }

        const currentLine = BOOT_SEQUENCE[visibleLines];
        const fullText = `[${currentLine.timestamp}] ${currentLine.message}`;
        let charIndex = 0;
        let lastTime = performance.now();
        let animationFrameId: number;

        const animate = (time: number) => {
            const deltaTime = time - lastTime;

            if (deltaTime >= typingSpeed) {
                charIndex++;
                setCurrentLineText(fullText.slice(0, charIndex));
                lastTime = time;
            }

            if (charIndex < fullText.length) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setVisibleLines(prev => prev + 1);
                    setCurrentLineText('');
                }, lineDelay);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [visibleLines, typingSpeed, lineDelay, onBootComplete]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [visibleLines, currentLineText]);

    return (
        <div
            ref={containerRef}
            className={`font-mono text-xs sm:text-sm leading-relaxed ${className}`}
        >
            {/* Completed lines */}
            <AnimatePresence>
                {BOOT_SEQUENCE.slice(0, visibleLines).map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[#00ff41]/90"
                    >
                        <span className="text-[#00ff41]/60">[{line.timestamp}]</span>{' '}
                        {line.message}
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Currently typing line */}
            {isTyping && currentLineText && (
                <div className="text-[#00ff41]/90">
                    {currentLineText}
                    <span className="animate-pulse">▌</span>
                </div>
            )}
        </div>
    );
};

export default TerminalBoot;
