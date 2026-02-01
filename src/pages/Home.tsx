import Hero from '../components/hero/Hero';
import CertificationSection from '../components/certifications/CertificationSection';

/**
 * Home - Portfolio homepage
 * Renders Hero section with CertificationSection below
 * NetworkBackground covers the entire page as a fixed layer
 */
const Home: React.FC = () => {
    return (
        <main className="relative min-h-screen">
            {/* Global background - handles its own fixed positioning */}
            {/* NetworkBackground moved to Hero */}

            {/* Content */}
            <Hero />
            <CertificationSection />
        </main>
    );
};

export default Home;
