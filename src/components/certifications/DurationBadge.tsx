import React from 'react';

interface DurationBadgeProps {
    uptime: string;
}

const DurationBadge: React.FC<DurationBadgeProps> = ({ uptime }) => {
    return (
        <div className="px-6 pb-6">
            <div className="rounded-lg border border-blue-slate/30 bg-blue-slate/5 p-3">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase text-blue-slate">Duration</span>
                    <span className="text-sm font-mono font-bold text-blue-slate">
                        {uptime.replace('_', ' ')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DurationBadge;
