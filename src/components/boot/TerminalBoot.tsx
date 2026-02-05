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

const BOOT_SEQUENCE: TerminalLine[] = [
    { timestamp: '0.000000', message: 'GNU GRUB  version 2.12-2.fc40' },
    { timestamp: '0.010245', message: ' ' },
    { timestamp: '0.021584', message: '*Linux 6.9.3-generic' },
    { timestamp: '0.032412', message: ' Advanced options for Linux 6.9.3-generic' },
    { timestamp: '0.041256', message: ' UEFI Firmware Settings' },
    { timestamp: '0.052147', message: ' ' },
    { timestamp: '0.061209', message: ' ' },
    { timestamp: '0.072584', message: 'The highlighted entry will be executed automatically in 2s.' },
    { timestamp: '1.084512', message: 'Booting in 1s...' },
    { timestamp: '2.102567', message: 'Loading Linux 6.9.3-generic ...' },
    { timestamp: '2.314258', message: 'Loading initial ramdisk ...' },
    { timestamp: '2.825147', message: 'Decompressing Linux... Parsing ELF... done.' },
    { timestamp: '3.125874', message: 'Booting the kernel.' },
];

/**
 * TerminalBoot - Simulated Linux kernel boot sequence
 * Typewriter effect with realistic timestamps
 * Calls onBootComplete when finished
 */
const TerminalBoot: React.FC<TerminalBootProps> = ({
    className = '',
    typingSpeed = 1, // Ultra fast
    lineDelay = 10,   // Almost no delay
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
