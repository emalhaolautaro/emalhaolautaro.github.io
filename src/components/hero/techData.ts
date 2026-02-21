import type { IconType } from 'react-icons';
import {
    SiC,
    SiRust,
    SiLinux,
    SiPython,
    SiNodedotjs,
    SiTypescript,
    SiReact,
    SiElectron
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export interface TechCategory {
    title: string;
    skills: string[];
    delay: number;
}

export const SKILL_ICONS: Record<string, IconType> = {
    'C': SiC,
    'Rust': SiRust,
    'Linux': SiLinux,
    'Java': FaJava,
    'Python': SiPython,
    'Node.js': SiNodedotjs,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'Electron': SiElectron
};

export const TECH_CATEGORIES: TechCategory[] = [
    {
        title: "Low-Level / OS",
        skills: ['C', 'Rust', 'Linux'],
        delay: 0.6
    },
    {
        title: "Logic & Languages",
        skills: ['Java', 'Python', 'Node.js'],
        delay: 0.7
    },
    {
        title: "Frontend & Delivery",
        skills: ['TypeScript', 'React', 'Electron'],
        delay: 0.8
    }
];
