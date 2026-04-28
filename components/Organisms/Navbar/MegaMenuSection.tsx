"use client";

import * as React from "react";

interface MegaMenuSectionProps {
  title: string;
  items: { name: string; icon: React.ElementType }[];
}

export function MegaMenuSection({ title, items }: MegaMenuSectionProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
        <span>{title}</span>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3 text-[15px] font-medium text-slate-900">
            <item.icon className="shrink-0" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
