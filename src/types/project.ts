export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    size: 'small' | 'large';
    link?: string; // Opcional, por si querés linkear a GitHub
}