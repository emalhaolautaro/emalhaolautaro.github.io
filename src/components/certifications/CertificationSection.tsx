import React from 'react';
import CertificationCard from './CertificationCard';
import { CERTIFICATIONS } from './types';

const CertificationSection: React.FC = () => {
    return (
        <section
            className="relative z-10 py-24 px-4 flex flex-col items-center min-h-screen bg-coffee-bean"
        >
            {/* Título de la sección */}
            <div className="max-w-7xl w-full mx-auto text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-eggshell tracking-wider">
                    CERTIFICATIONS
                </h2>
            </div>

            {/* Grid de cards */}
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="w-full max-w-sm">
                        <CertificationCard certification={cert} />
                    </div>
                ))}
            </div>

            {/* Metadata footer */}
            <div className="max-w-7xl mx-auto text-center" style={{ marginTop: '64px' }}>
                <p className="text-sm font-mono" style={{ color: 'rgba(82, 82, 91, 1)' }}>
                    TOTAL_UPTIME: <span style={{ color: '#34d399' }}>60_HOURS</span>
                </p>
            </div>
        </section>
    );
};

export default CertificationSection;