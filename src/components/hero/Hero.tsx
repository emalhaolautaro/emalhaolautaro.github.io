import GlassCard from './GlassCard';
import ProfileAvatar from './ProfileAvatar';
import HeroTitle from './HeroTitle';
import StatusIndicator from './StatusIndicator';
import HeroMessage from './HeroMessage';

/**
 * Hero - Main hero section component
 * Modular composition of individual hero elements with glassmorphism card
 * Background is now handled by parent (Home.tsx)
 */
const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Content Layer */}
            <GlassCard className="relative z-20">
                <div className="flex flex-col items-center text-center gap-6">
                    <ProfileAvatar />

                    <HeroTitle
                        name="Lautaro Emalhao"
                        role="Software Engineer"
                    />

                    <StatusIndicator />

                    <HeroMessage
                        text="Portfolio under construction"
                    />
                </div>
            </GlassCard>
        </section>
    );
};

export default Hero;
