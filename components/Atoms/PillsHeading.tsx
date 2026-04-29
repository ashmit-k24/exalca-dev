import React from 'react';

interface PillsHeadingProps {
    text: string;
    className?: string;
}

const PillsHeading: React.FC<PillsHeadingProps> = ({ text, className = "" }) => {
    return (
        <div className={`inline-flex rounded-[999px] bg-gradient-to-b from-[#E1E4EA] to-transparent p-1 h-[32px] transition-all duration-300 cursor-default ${className}`}>
            <div className="inline-flex items-center justify-center rounded-[999px] bg-white px-3 py-2 border border-border shadow-[0px_6px_12px_-7.61px_rgba(4,37,47,0.12),_0px_1px_2px_0px_rgba(4,37,47,0.06)]">
                <span className="text-[14px] font-medium text-[#444444] tracking-[-0.02em]">
                    {text}
                </span>
            </div>
        </div>
    );
};

export default PillsHeading;
