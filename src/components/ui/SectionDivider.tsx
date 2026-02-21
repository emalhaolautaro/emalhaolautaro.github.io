import React from 'react';

interface SectionDividerProps {
    /** Section number, e.g. "02" */
    sectionNumber: string;
    /** Section label, e.g. "ACADEMIC_RECORDS" */
    label: string;
    /** Alignment of the metadata block - default: 'left' */
    align?: 'left' | 'center';
}

/**
 * SectionDivider - Technical schematic-style section separator
 * A full-width line with system metadata to avoid abrupt color cuts between sections
 */
const SectionDivider: React.FC<SectionDividerProps> = ({
    sectionNumber,
    label,
    align = 'left'
}) => {
    return (
        <div className="relative w-full py-8">
            {/* Full-width line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-slate/20" />

            {/* Metadata block */}
            <div className={`
                relative flex 
                ${align === 'center' ? 'justify-center' : 'justify-start pl-8 md:pl-16'}
            `}>
                <span className="
                    px-4 py-1.5
                    bg-dark-obsidian
                    font-mono text-xs tracking-widest
                    text-blue-slate
                    border border-blue-slate/20
                ">
                    [ SECTION_{sectionNumber} // {label} ]
                </span>
            </div>
        </div>
    );
};

export default SectionDivider;
