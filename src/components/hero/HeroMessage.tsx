import { motion } from 'framer-motion';

interface HeroMessageProps {
    text: string;
    version?: string;
}

const HeroMessage: React.FC<HeroMessageProps> = ({ text, version }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-1"
        >
            <p className="text-white/50 text-sm md:text-base text-justify">
                {text}
            </p>

            {version && (
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    {version}
                </p>
            )}
        </motion.div>
    );
};

export default HeroMessage;
