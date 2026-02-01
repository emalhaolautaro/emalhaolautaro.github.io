import Hero from '../components/hero/Hero';
import CertificationSection from '../components/certifications/CertificationSection';
import SectionDivider from '../components/ui/SectionDivider';

/**
 * Home - Portfolio homepage
 * Renders Hero section with CertificationSection below
 * NetworkBackground covers the entire page as a fixed layer
 */
const Home: React.FC = () => {
    return (
        <main className="relative min-h-screen bg-dark-obsidian">
            {/* Global background - handles its own fixed positioning */}
            {/* NetworkBackground moved to Hero */}

            {/* Content */}
            <Hero />

            <SectionDivider
                sectionNumber="02"
                label="ACADEMIC_RECORDS"
            />

            <CertificationSection />
        </main>
    );
};

export default Home;
