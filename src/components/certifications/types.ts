export interface Certification {
    id: string;
    issuer: string;
    title: string;
    highlight: string;
    uptime: string;
    status: 'VERIFIED' | 'PENDING' | 'EXPIRED';
}

export const CERTIFICATIONS: Certification[] = [
    {
        id: 'KMP-01',
        issuer: 'UNS_EATI',
        title: 'Kotlin Multiplatform',
        highlight: 'Cross-platform engineering for Android, iOS, Web, and Desktop using a unified codebase.',
        uptime: '20_HOURS',
        status: 'VERIFIED'
    },
    {
        id: 'GDT-02',
        issuer: 'UNS_EATI',
        title: 'Godot Engine 2D',
        highlight: 'Architectural foundations of 2D game mechanics and engine-level development.',
        uptime: '20_HOURS',
        status: 'VERIFIED'
    },
    {
        id: 'AI-03',
        issuer: 'UNC_VIRTUAL',
        title: 'AI & Automation',
        highlight: 'Efficient AI integration and optimization of automated workflow infrastructures.',
        uptime: '20_HOURS',
        status: 'VERIFIED'
    }
];

export const getStatusColor = (status: Certification['status']): string => {
    switch (status) {
        case 'VERIFIED':
            return '#34d399'; // emerald-400
        case 'PENDING':
            return '#facc15'; // yellow-400
        case 'EXPIRED':
            return '#f87171'; // red-400
        default:
            return '#9ca3af'; // gray-400
    }
};
