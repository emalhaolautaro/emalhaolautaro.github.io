import React from 'react';

interface LightProp {
    className: string;
    background: string;
    filter: string;
}

const LIGHTS: LightProp[] = [
    {
        // Main linear gradient - Light to Dark diagonal
        className: "absolute inset-0 pointer-events-none",
        background: `linear-gradient(135deg, 
            rgba(171, 175, 181, 0.20) 0%, 
            rgba(224, 180, 178, 0.10) 15%,
            rgba(103, 126, 138, 0.15) 35%,
            rgba(46, 61, 71, 0.20) 55%,
            rgba(18, 46, 52, 0.25) 75%,
            rgba(14, 29, 33, 0.30) 100%
        )`,
        filter: 'none'
    }
];

const HeroBackground: React.FC = () => {
    return (
        <>
            {LIGHTS.map((light, index) => (
                <div
                    key={index}
                    className={light.className}
                    style={{
                        background: light.background,
                        filter: light.filter,
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                />
            ))}
        </>
    );
};

export default HeroBackground;
