import React from "react";
import { Building2, Mail, Phone } from "lucide-react";

const LocationDetails = () => {
  const details = [
    {
      icon: <Building2 className="h-5 w-5 text-[#0B0B0B]" />,
      text: "#433, 3rd Floor, 19th Main, Sector 4, HSR Layout, Bengaluru, Karnataka 560102.",
    },
    {
      icon: <Mail className="h-5 w-5 text-[#0B0B0B]" />,
      text: "sales@exalca.com,\nsupport@exalca.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-[#0B0B0B]" />,
      text: "+91 804111 5686",
    },
  ];

  return (
    <div className="LocationDetails mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
      {details.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm">
            {item.icon}
          </div>
          <p className="whitespace-pre-line text-left text-[16px] leading-[26px] text-[#666666]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LocationDetails;