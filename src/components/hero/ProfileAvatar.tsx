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
            className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center"
            style={{
                background: 'rgba(20, 20, 20, 0.6)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
        >
            {icon || (
                // Default: Initials "LE"
                <span className="text-white/90 text-2xl font-bold tracking-tight font-mono">
                    LE
                </span>
            )}
        </motion.div>
    );
};

export default ProfileAvatar;
