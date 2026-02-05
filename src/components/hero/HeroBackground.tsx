import React from 'react';

interface LightProp {
    className: string;
    background: string;
    filter: string;
}

const LIGHTS: LightProp[] = [
    {
        // Hero Light - Top Left (Blood Red)
        className: "absolute -top-1/3 -left-1/3 w-[100vw] h-[100vh] rounded-full pointer-events-none",
        background: 'radial-gradient(circle, hsla(3, 99%, 28%, 0.15) 0%, transparent 60%)',
        filter: 'blur(80px)'
    },
    {
        // Sectional Light - Bottom Right (Blue Slate)
        className: "absolute -bottom-1/3 -right-1/3 w-[90vw] h-[90vh] rounded-full pointer-events-none",
        background: 'radial-gradient(circle, hsla(233, 14%, 46%, 0.12) 0%, transparent 60%)',
        filter: 'blur(100px)'
    },
    {
        // Warm Center Light (Dust Grey)
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full pointer-events-none",
        background: 'radial-gradient(circle, hsla(38, 16%, 76%, 0.05) 0%, transparent 50%)',
        filter: 'blur(60px)'
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
