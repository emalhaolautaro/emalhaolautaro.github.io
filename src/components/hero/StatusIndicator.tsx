import { motion } from 'framer-motion';

interface StatusIndicatorProps {
    progress?: number; // 0-100
    color?: string;
    width?: string;
    className?: string;
}

/**
 * StatusIndicator - Progress bar showing career advancement
 */
const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    progress = 82,
    color = '#ca61c3', // orchid-mist from palette
    width = '200px',
    className = '',
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {/* Progress bar background */}
            <div
                style={{
                    width,
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                }}
            >
                {/* Progress fill */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                    style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${color}, #ee85b5)`,
                        boxShadow: `0 0 10px ${color}`,
                        borderRadius: '4px',
                        transformOrigin: 'left',
                    }}
                />
            </div>

            {/* Progress label */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="text-xs text-white/40 font-mono"
            >
                {progress}% career progress
            </motion.span>
        </div>
    );
};

export default StatusIndicator;
