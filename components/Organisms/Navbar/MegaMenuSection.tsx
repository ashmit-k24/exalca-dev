"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface MegaMenuSectionProps {
  title: string;
  items: { name: string; href: string; icon: React.ElementType }[];
}

export function MegaMenuSection({ title, items }: MegaMenuSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
        <span>{title}</span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <NavigationMenuLink
            key={item.name}
            asChild
            className="flex items-center gap-3 py-1 rounded-xl border border-transparent text-[15px] font-medium text-slate-900 hover:bg-transparent hover:text-[#2e19b9] data-active:bg-transparent"
          >
            <Link href={item.href}>
              <item.icon className="shrink-0" />
              <span>{item.name}</span>
            </Link>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );
}
