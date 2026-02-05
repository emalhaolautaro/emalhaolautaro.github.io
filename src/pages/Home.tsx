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
            <Spotlight />
            {/* Global background - handles its own fixed positioning */}
            {/* NetworkBackground moved to Hero */}

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
