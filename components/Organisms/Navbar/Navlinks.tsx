"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownTrigger } from "./DropdownTrigger";
import { MegaMenuSection } from "./MegaMenuSection";
import { AccountPayableAutomation } from "@/components/Atoms/svgComponents/AccountPayableAutomation";
import { BusinessPartnerOnboardingPortal } from "@/components/Atoms/svgComponents/BusinessPartnerOnboardingPortal";
import { DataCleansingOptimization } from "@/components/Atoms/svgComponents/DataCleansingOptimization";
import { DataEnrichment } from "@/components/Atoms/svgComponents/DataEnrichment";
import { DigitalSignatureCockpit } from "@/components/Atoms/svgComponents/DigitalSignatureCockpit";
import { EInvoicingEWayBillSolution } from "@/components/Atoms/svgComponents/EInvoicingEWayBillSolution";
import { FinancialReconciliation } from "@/components/Atoms/svgComponents/FinancialReconciliation";
import { ForwardReverseAuctioning } from "@/components/Atoms/svgComponents/ForwardReverseAuctioning";
import { GateEntryExit } from "@/components/Atoms/svgComponents/GateEntryExit";
import { MasterDataAsAService } from "@/components/Atoms/svgComponents/MasterDataAsAService";
import { MasterDataSolutionForSAP } from "@/components/Atoms/svgComponents/MasterDataSolutionForSAP";
import { P2PSuiteForSAP } from "@/components/Atoms/svgComponents/P2PSuiteForSAP";
import { PostProcurementPortal } from "@/components/Atoms/svgComponents/PostProcurementPortal";
import { PreProcurementPortal } from "@/components/Atoms/svgComponents/PreProcurementPortal";
import { ShiftHandover } from "@/components/Atoms/svgComponents/ShiftHandover";
import { MobileWarehouseManagementSystem } from "@/components/Atoms/svgComponents/MobileWarehouseManagementSystem";
import { BusinessTransformationServices } from "@/components/Atoms/svgComponents/BusinessTransformationServices";
import { RapidDeployment } from "@/components/Atoms/svgComponents/RapidDeployment";
import { ApplicationIntegrationServicesWithSAPCPI } from "@/components/Atoms/svgComponents/ApplicationIntegrationServicesWithSAPCPI";
import { CustomDevelopment } from "@/components/Atoms/svgComponents/CustomDevelopment";
import { PlatformTechnologyIntegrationServices } from "@/components/Atoms/svgComponents/PlatformTechnologyIntegrationServices";
import { StaffAugmentation } from "@/components/Atoms/svgComponents/StaffAugmentation";
import { ApplicationManagementServices } from "@/components/Atoms/svgComponents/ApplicationManagementServices";
export const navLinkClass =
  "relative inline-flex h-14 items-center px-3 text-[15px] font-medium text-slate-900 transition-colors hover:text-[#2e19b9] focus-visible:outline-none after:absolute after:bottom-3 after:left-3 after:h-0.5 after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-[#7ac943] after:transition-transform after:duration-200";

const topLinks = [
  { title: "Home", href: "/" },
  { title: "Case Study", href: "/case-study" },
  { title: "About Us", href: "/about-us" },
  { title: "Career", href: "/career" },
  { title: "Contact Us", href: "/contact-us" },
] as const;

const solutionGroups = [
  {
    title: "Data Optimization",
    items: [
      { name: "Master Data Solution for SAP", href: "/solutions/master-data-solution-for-sap", icon: MasterDataSolutionForSAP },
      { name: "Data Cleansing & Optimization", href: "/solutions/data-cleansing-optimization", icon: DataCleansingOptimization },
      { name: "Data Enrichment", href: "/solutions/data-enrichment", icon: DataEnrichment },
    ],
  },
  {
    title: "Partner Collaboration",
    items: [
      { name: "Business Partner Onboarding Portal", href: "/solutions/business-partner-onboarding-portal", icon: BusinessPartnerOnboardingPortal },
      { name: "Pre-Procurement Portal", href: "/solutions/pre-procurement-portal", icon: PreProcurementPortal },
      { name: "Post Procurement Portal", href: "/solutions/post-procurement-portal", icon: PostProcurementPortal },
      { name: "Forward / Reverse Auctioning", href: "/solutions/forward-reverse-auctioning", icon: ForwardReverseAuctioning },
    ],
  },
  {
    title: "Process Optimization",
    items: [
      { name: "Account Payable Automation", href: "/solutions/account-payable-automation", icon: AccountPayableAutomation },
      { name: "P2P Suite For SAP", href: "/solutions/p2p-suite-for-sap", icon: P2PSuiteForSAP },
      { name: "Financial Reconciliation", href: "/solutions/financial-reconciliation", icon: FinancialReconciliation },
      { name: "Mobile Warehouse Management System", href: "/solutions/mobile-warehouse-management-system", icon: MobileWarehouseManagementSystem },
    ],
  },
  {
    title: "Process Automation",
    items: [
      { name: "Digital Signature Cockpit", href: "/solutions/digital-signature-cockpit", icon: DigitalSignatureCockpit },
      { name: "E-Invoicing / E-Way Bill Solution", href: "/solutions/e-invoicing-e-way-bill-solution", icon: EInvoicingEWayBillSolution },
      { name: "Gate Entry - Exit", href: "/solutions/gate-entry-exit", icon: GateEntryExit },
      { name: "Shift Handover", href: "/solutions/shift-handover", icon: ShiftHandover },
    ],
  },
];

const serviceItems = [
  {
    name: "Business Transformation Services",
    href: "/services/business-transformation-services",
    icon: BusinessTransformationServices,
    description: "Modernize operations with digital-first solutions",
  },
  {
    name: "Rapid Deployment & BTP Applications for SAP",
    href: "/services/rapid-deployment-btp-applications-for-sap",
    icon: RapidDeployment,
    description: "Go live faster with ready-to-use SAP extensions",
  },
  {
    name: "Master Data As A Service (MDAAS)",
    href: "/services/master-data-as-a-service-mdaas",
    icon: MasterDataAsAService,
    description: "Ensure accurate, consistent, and reliable data",
  },
  {
    name: "Application Integration Services with SAP CPI",
    href: "/services/application-integration-services-with-sap-cpi",
    icon: ApplicationIntegrationServicesWithSAPCPI,
    description: "Secure cloud-based process integration hub",
  },
  {
    name: "Custom Development",
    href: "/services/custom-development",
    icon: CustomDevelopment,
    description: "Tailored solutions built for your business",
  },
  {
    name: "Platform & Technology Integration Services",
    href: "/services/platform-technology-integration-services",
    icon: PlatformTechnologyIntegrationServices,
    description: "Connect systems for seamless data flow",
  },
  {
    name: "Staff Augmentation",
    href: "/services/staff-augmentation",
    icon: StaffAugmentation,
    description: "Scale your teams with skilled technology experts",
  },
  {
    name: "Application Management Services (AMS)",
    href: "/services/application-management-services-ams",
    icon: ApplicationManagementServices,
    description: "Ensure stability, performance, and continuity",
  },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}


const megaMenuClass =
  "absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,960px)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_28px_80px_rgba(15,23,42,0.14)] before:absolute before:-top-2 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-slate-200 before:bg-white";

const Navlinks = () => {
  const pathname = usePathname();
  const solutionsActive = pathname.startsWith("/solutions");
  const servicesActive = pathname.startsWith("/services");

  return (
    <div className="flex items-center gap-6">
      <NavigationMenu viewport={false} className="flex-none w-full">
        <NavigationMenuList className="gap-1">
          {topLinks.slice(0, 1).map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  navLinkClass,
                  "hover:after:scale-x-100",
                  isActivePath(pathname, link.href) && "text-primary after:scale-x-100"
                )}
              >
                {link.title}
              </Link>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <DropdownTrigger label="Solutions" active={solutionsActive} />
            <NavigationMenuContent className={megaMenuClass}>
              <div className="grid gap-8 md:grid-cols-2">
                {solutionGroups.map((group) => (
                  <MegaMenuSection key={group.title} {...group} />
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DropdownTrigger label="Services" active={servicesActive} />
            <NavigationMenuContent className={cn(megaMenuClass, "w-[min(92vw,860px)]")}>
              <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                {serviceItems.map((item) => (
                  <NavigationMenuLink
                    key={item.name}
                    asChild
                    className="rounded-xl border border-transparent px-0 py-2 hover:bg-transparent data-active:bg-transparent"
                  >
                    <Link href={item.href}>
                      <div className="flex items-start gap-3">
                        <item.icon size={20} className="shrink-0 mt-0 size-6" />
                        <div className="space-y-1">
                          <div className="text-[15px] font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {topLinks.slice(1).map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  navLinkClass,
                  "hover:after:scale-x-100",
                  isActivePath(pathname, link.href) && "text-[#2e19b9] after:scale-x-100"
                )}
              >
                {link.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <Button
          asChild

        >
          <Link href="/schedule-demo">Schedule Demo</Link>
        </Button>
        <Button
          asChild
        >
          <Link href="/ess">ESS</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navlinks;
