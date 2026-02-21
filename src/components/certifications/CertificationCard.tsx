import React from 'react';
import type { Certification } from './types';
import StatusBadge from './StatusBadge';
import DurationBadge from './DurationBadge';

interface CertificationCardProps {
    certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
    const certUrl = `/certs/${certification.id}.pdf`;

    return (
        <a
            href={certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden transition-all duration-300 flex flex-col group bg-coffee-bean border border-blue-slate/30 min-h-[280px] box-border hover:border-accent-teal hover:shadow-[0_0_20px_rgba(74,140,153,0.3)] cursor-pointer"
        >
            {/* Header con ID y Status */}
            <div
                className="flex justify-between items-start p-6 border-b border-blue-slate/30"
            >
                <div>
                    <p className="text-sm font-mono mb-1 text-blue-slate font-bold">{certification.id}</p>
                    <p className="text-xs font-mono text-dust-grey/70">{certification.issuer}</p>
                </div>
                <StatusBadge status={certification.status} />
            </div>

            {/* Contenido principal */}
            <div className="flex-grow flex flex-col p-6">
                <h3 className="text-2xl font-bold text-dust-grey mb-4">
                    {certification.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow text-dust-grey/70">
                    {certification.highlight}
                </p>
            </div>

            {/* Footer con duración */}
            <DurationBadge uptime={certification.uptime} />
        </a>
    );
};

export default CertificationCard;
