import NetworkBackground from './NetworkBackground';
import GlassCard from './GlassCard';
import ProfileAvatar from './ProfileAvatar';
import HeroTitle from './HeroTitle';
import StatusIndicator from './StatusIndicator';
import HeroMessage from './HeroMessage';

/**
 * Hero - Main hero section component
 * Modular composition of individual hero elements with glassmorphism card
 */
const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center p-4">
            {/* Background Layer */}
            <NetworkBackground />

            {/* Content Layer */}
            <GlassCard className="relative z-10">
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
