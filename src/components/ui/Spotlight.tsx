import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Spotlight: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight movement
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-slate/10 rounded-full blur-[80px] pointer-events-none z-50 mix-blend-overlay"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: '-50%',
                translateY: '-50%',
                opacity: isHovering ? 1 : 0,
                willChange: 'transform', // Optimization for GPU layering
            }}
        />
    );
};

export default Spotlight;
