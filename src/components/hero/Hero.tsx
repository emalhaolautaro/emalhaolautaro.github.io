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
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-coffee-bean">
            {/* Hero Light - Top Left (Blood Red) */}
            <div
                className="absolute -top-1/3 -left-1/3 w-[100vw] h-[100vh] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, hsla(3, 99%, 28%, 0.15) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
            />

            {/* Sectional Light - Bottom Right (Blue Slate) */}
            <div
                className="absolute -bottom-1/3 -right-1/3 w-[90vw] h-[90vh] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, hsla(233, 14%, 46%, 0.12) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
            />

            {/* Warm Center Light (Dust Grey) */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, hsla(38, 16%, 76%, 0.05) 0%, transparent 50%)',
                    filter: 'blur(60px)',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                }}
            />

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
