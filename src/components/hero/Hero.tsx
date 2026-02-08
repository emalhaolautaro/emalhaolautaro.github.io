import GlassCard from './GlassCard';
import HeroTitle from './HeroTitle';
import StatusIndicator from './StatusIndicator';
import HeroMessage from './HeroMessage';
import SocialButtons from './SocialButtons';
import TechStack from './TechStack';
import HeroBackground from './HeroBackground';

/**
 * Hero - Main hero section component
 * Modular composition of individual hero elements with glassmorphism card
 * Background is now handled by parent (Home.tsx)
 */
const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-coffee-bean">
            <HeroBackground />

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

                        <SocialButtons className="mt-2" />
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
