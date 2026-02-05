import GlassCard from './GlassCard';
import HeroTitle from './HeroTitle';
import StatusIndicator from './StatusIndicator';
import HeroMessage from './HeroMessage';
import TechStack from './TechStack';

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
            <GlassCard className="relative z-20" maxWidth="max-w-5xl" padding="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    {/* Left Column: Info */}
                    <div className="flex flex-col items-start text-left gap-6 flex-1">
                        <HeroTitle
                            name="Lautaro Emalhao"
                            role="Licenciado en Ciencias de la Computación"
                        />

                        <div className="w-full pl-1">
                            <StatusIndicator className="items-start" />
                        </div>

                        <HeroMessage
                            text="I build end-to-end solutions by analyzing every layer of the system. My background enables me to design architectures that prioritize low-level efficiency alongside seamless user experiences. I advocate for software that is portable, robust, and well-structured by design."
                        />
                    </div>

                    {/* Right Column: Tech Stack */}
                    <div className="flex-1 w-full md:w-auto">
                        <TechStack />
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};

export default Hero;
