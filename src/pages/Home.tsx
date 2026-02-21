import Hero from '../components/hero/Hero';
import CertificationSection from '../components/certifications/CertificationSection';
import ProjectSection from '../components/projects/ProjectSection';
import SectionDivider from '../components/ui/SectionDivider';
import Spotlight from '../components/ui/Spotlight';

/**
 * Home - Portfolio homepage
 * Renders Hero section with CertificationSection and ProjectSection below
 * NetworkBackground covers the entire page as a fixed layer
 */
const Home: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-dark-obsidian">
            {/* Global gradient overlay - creates the light-to-dark diagonal feel */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: `
                        linear-gradient(135deg, 
                            rgba(171, 175, 181, 0.12) 0%, 
                            rgba(103, 126, 138, 0.08) 30%,
                            rgba(18, 46, 52, 0.05) 60%,
                            transparent 100%
                        )
                    `
                }}
            />
            <Spotlight />

            {/* Content */}
            <Hero />

            <SectionDivider
                sectionNumber="02"
                label="ACADEMIC_RECORDS"
            />

            <CertificationSection />

            <SectionDivider
                sectionNumber="03"
                label="PROJECTS"
            />

            <ProjectSection />
        </main>
    );
};

export default Home;
