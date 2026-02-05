import { motion } from 'framer-motion';
import TerminalBoot from './TerminalBoot';

interface BootIntroProps {
    onComplete: () => void;
}

/**
 * BootIntro - Standalone boot sequence intro screen
 * Shows terminal animation, then calls onComplete to transition to Home
 */
const BootIntro: React.FC<BootIntroProps> = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-8 cursor-pointer"
            onClick={onComplete} // Allow skipping
        >
            <div className="max-w-2xl w-full">
                <TerminalBoot onBootComplete={onComplete} />
            </div>
            {/* Skip hint */}
            <div className="absolute bottom-8 text-white/20 text-xs font-mono animate-pulse">
                [ CLICK TO SKIP ]
            </div>
        </motion.div>
    );
};

export default BootIntro;
