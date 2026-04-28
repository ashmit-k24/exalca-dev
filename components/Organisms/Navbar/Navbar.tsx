import { IMAGE_URLS } from "@/constants/images.constants";
import Navlinks from "@/components/Organisms/Navbar/Navlinks";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="container">
        <div className="flex min-h-20 items-center justify-between gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src={IMAGE_URLS.EXALCA_LOGO}
              width={198}
              height={40}
              alt="Exalca Logo"
              className="h-10 w-49.5"
              priority
            />
          </Link>

          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
