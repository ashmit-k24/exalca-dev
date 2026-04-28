"use client";

import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navLinkClass } from "./Navlinks";

interface DropdownTriggerProps {
  label: string;
  active: boolean;
}

export function DropdownTrigger({ label, active }: DropdownTriggerProps) {
  return (
    <NavigationMenuTrigger
      className={cn(
        navLinkClass,
        "h-14 rounded-none bg-transparent px-3 py-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#2e19b9]",
        "after:bg-[#7ac943] hover:after:scale-x-100 data-[state=open]:after:scale-x-100",
        active && "text-[#2e19b9] after:scale-x-100"
      )}
    >
      {label}
    </NavigationMenuTrigger>
  );
}
