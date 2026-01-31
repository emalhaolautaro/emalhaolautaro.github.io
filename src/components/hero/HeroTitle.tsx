import { motion } from 'framer-motion';

interface HeroTitleProps {
    name: string;
    role: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ name, role }) => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
                {name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-lg md:text-xl text-white/60 mt-1"
            >
                {role}
            </motion.p>
        </div>
    );
};

export default HeroTitle;
