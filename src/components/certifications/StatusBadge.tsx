import React from 'react';
import type { Certification } from './types';

interface StatusBadgeProps {
    status: Certification['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    return (
        <div className="flex items-center gap-2">
            <span
                className="w-2 h-2 rounded-full animate-pulse bg-blood-red"
            />
            <span className="text-xs font-mono text-blood-red">
                {status}
            </span>
        </div>
    );
};

export default StatusBadge;
