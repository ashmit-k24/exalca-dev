import React from "react";
import PillsHeading from "@/components/Atoms/PillsHeading";
import { cn } from "@/lib/utils";

interface MapSectionProps {
    pillText: string;
    heading: string;
    extraContent?: React.ReactNode;
    mapLink: string;
    className?: string;
}

const MapSection: React.FC<MapSectionProps> = ({
    pillText,
    heading,
    extraContent,
    mapLink,
    className,
}) => {
    return (
        <section className={cn("MapSection sec_padding bg-background", className)}>
            <div className="container">
                <div className="mx-auto mb-14 flex flex-col items-center text-center">
                    <PillsHeading text={pillText} className="mb-4" />
                    <h2 className="section-title-h2 text-gradient font-semibold">
                        {heading}
                    </h2>
                    {extraContent && <div className="mt-6 w-full">{extraContent}</div>}
                </div>

                <div className="mx-auto w-full">
                    {/* Double-layered structure with 8px transparent border */}
                    <div className="rounded-[16px] border border-border p-2">
                        <div className="overflow-hidden rounded-[12px] border border-border bg-white shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)]">
                            <iframe
                                src={mapLink}
                                width="100%"
                                height="364"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full  transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;