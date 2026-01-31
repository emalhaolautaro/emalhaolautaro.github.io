import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    colorIndex: number;
}

/**
 * ParticleNetwork - Floating particles with connecting lines
 * Many small particles with low opacity and light gray connections
 */
const ParticleNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let lastFrame = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        const particles: Particle[] = [];
        const particleCount = 120;
        const connectionDistance = 140;

        // Color palette
        const colors = [
            { r: 68, g: 17, b: 81 },    // dark-amethyst #441151
            { r: 136, g: 54, b: 119 },  // grape-soda #883677
            { r: 202, g: 97, b: 195 },  // orchid-mist #ca61c3
            { r: 238, g: 133, b: 181 }, // pink-carnation #ee85b5
            { r: 255, g: 149, b: 140 }, // sweet-salmon #ff958c
        ];

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    size: Math.random() * 3 + 3, // Larger particles (3-6px)
                    colorIndex: Math.floor(Math.random() * colors.length),
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const draw = (timestamp: number) => {
            if (timestamp - lastFrame < frameInterval) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }
            lastFrame = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(p => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw 3D sphere with radial gradient
                const color = colors[p.colorIndex];
                const gradient = ctx.createRadialGradient(
                    p.x - p.size * 0.3, p.y - p.size * 0.3, 0, // Light source offset
                    p.x, p.y, p.size
                );
                // Highlight (lighter version of color)
                const highlightR = Math.min(255, color.r + 80);
                const highlightG = Math.min(255, color.g + 80);
                const highlightB = Math.min(255, color.b + 80);
                gradient.addColorStop(0, `rgba(${highlightR}, ${highlightG}, ${highlightB}, 0.95)`);
                gradient.addColorStop(0.4, `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`);
                // Shadow (darker version)
                const shadowR = Math.floor(color.r * 0.4);
                const shadowG = Math.floor(color.g * 0.4);
                const shadowB = Math.floor(color.b * 0.4);
                gradient.addColorStop(1, `rgba(${shadowR}, ${shadowG}, ${shadowB}, 0.85)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections (more visible)
            ctx.lineWidth = 1.2;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.5;
                        // Blend colors of connected particles
                        const c1 = colors[particles[i].colorIndex];
                        const c2 = colors[particles[j].colorIndex];
                        const r = Math.round((c1.r + c2.r) / 2);
                        const g = Math.round((c1.g + c2.g) / 2);
                        const b = Math.round((c1.b + c2.b) / 2);
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default ParticleNetwork;
