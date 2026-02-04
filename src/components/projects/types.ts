export interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    status: 'ACTIVE' | 'ARCHIVED' | 'WIP';
    repoUrl?: string;
    liveUrl?: string;
    images?: ProjectImage[];
}

export const PROJECTS: Project[] = [
    {
        id: "SYS-001",
        title: "kur-os",
        description: "Custom OS kernel built from scratch for the x86_64 architecture.",
        longDescription: "A research-focused kernel developed in Rust, implementing core low-level features such as GDT/IDT initialization, interrupt handling, memory management, and direct VGA buffer manipulation.",
        tags: ["Rust", "x86_64", "OSDev"],
        status: "WIP",
        repoUrl: "https://github.com/emalhaolautaro/kur-os"
    },
    {
        id: "APP-001",
        title: "Glass Cinema",
        description: "Desktop streaming application featuring real-time casting and refactored DLNA support.",
        longDescription: "Leverages the WebTorrent protocol for decentralized streaming. This project involved a major refactoring of the casting system to ensure seamless multi-device playback and network discovery.",
        tags: ["Electron", "Node.js", "React", "WebTorrent"],
        status: "ACTIVE",
        repoUrl: "https://github.com/emalhaolautaro/glass-cinema",
        images: [
            { src: "/img/APP01.webp", alt: "Glass Cinema Dashboard" },
            { src: "/img/APP02.webp", alt: "Glass Cinema Detail" },
            { src: "/img/APP03.webp", alt: "Glass Cinema Player" }
        ]
    },
    {
        id: "WEB-001",
        title: "Public Domain Movies",
        description: "Web-based platform for browsing and streaming public domain films.",
        longDescription: "A high-performance frontend deployment on Vercel, integrating public media APIs with a strong focus on SEO, responsive design, and fluid user experience.",
        tags: ["React", "JavaScript", "Vercel", "Tailwind"],
        status: "ACTIVE",
        liveUrl: "https://freemovies-project.vercel.app/"
    },
    {
        id: "SYS-002",
        title: "MiniJava Compiler",
        description: "Full-scale compiler for a subset of the Java language.",
        longDescription: "A full-scale compiler implementing the entire translation pipeline. It covers lexical and syntactic analysis, rigorous semantic validation via AST and symbol table management, and final translation to target code representation.",
        tags: ["Java", "Compilers", "Formal Languages"],
        status: "ARCHIVED",
        repoUrl: "https://github.com/emalhaolautaro/minijava-compiler"
    },
    {
        id: "APP-002",
        title: "DCICflix",
        description: "Scalable movies platform based on a microservices architecture.",
        longDescription: "A distributed system focused on movie discovery and user engagement. It features a personalized recommendation engine using Natural Language Processing (NLP) and a robust rating system, all orchestrated through a microservices architecture with RabbitMQ, MongoDB, Recommendation Engine and Randomizer.",
        tags: ["Microservices", "Node.js", "RabbitQM", "MongoDB", "React", "TypeScript", "NLP", "Python"],
        status: "ACTIVE",
        repoUrl: "https://github.com/emalhaolautaro/DCICFlix",
        images: [
            { src: "/img/MIC01.webp", alt: "DCICFlix Home" },
            { src: "/img/MIC02.webp", alt: "DCICFlix Search" },
            { src: "/img/MIC03.webp", alt: "DCICFlix Recommendations" }
        ]
    },
    {
        id: "NET-001",
        title: "C Group Chat",
        description: "Multi-client chat server and client developed using low-level sockets.",
        longDescription: "A concurrent network communication system built in C using the Winsock API, handling multiple simultaneous connections through a custom-built server architecture.",
        tags: ["C", "Winsock", "Networking", "Concurrency"],
        status: "ARCHIVED",
        repoUrl: "https://github.com/emalhaolautaro/c-chat-grupal"
    }
];

