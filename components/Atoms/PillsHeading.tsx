import React from 'react';

interface PillsHeadingProps {
    text: string;
    className?: string;
}

const PillsHeading: React.FC<PillsHeadingProps> = ({ text, className = "" }) => {
    return (
        <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-md cursor-default ${className}`}>
            <span className="text-[13px] font-semibold text-[#1F2937] tracking-[0.02em]">
                {text}
            </span>
        </div>
    );
};

export default PillsHeading;
