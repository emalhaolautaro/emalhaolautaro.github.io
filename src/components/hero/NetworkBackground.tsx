import React from 'react';

/**
 * NetworkBackground - Simple particle network background
 * Uses fixed positioning to cover entire viewport
 */
const NetworkBackground: React.FC = () => {
    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundColor: '#1a1a1a', zIndex: 0 }}
        >
        </div>
    );
};

export default NetworkBackground;
