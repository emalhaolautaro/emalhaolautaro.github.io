import { motion } from 'framer-motion';

interface ProfileAvatarProps {
    icon?: React.ReactNode;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ icon }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-slate/30 transition-all duration-300 hover:border-blood-red hover:shadow-[0_0_15px_rgba(145,12,12,0.4)]"
        >
            {icon || (
                // Default: Initials "LE"
                <span className="text-dust-grey text-2xl font-bold tracking-tight font-mono">
                    LE
                </span>
            )}
        </motion.div>
    );
};

export default ProfileAvatar;
