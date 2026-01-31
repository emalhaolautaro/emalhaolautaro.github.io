import React from 'react';
import ParticleNetwork from './ParticleNetwork';

/**
 * NetworkBackground - Simple particle network background
 */
const NetworkBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
            <ParticleNetwork />
        </div>
    );
};

export default NetworkBackground;
