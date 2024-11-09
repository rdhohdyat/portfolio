import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-accent text-xl font-bold" />
      </SheetTrigger>
      <SheetContent>
        <div className="text-center">
          <h1 className="text-3xl">
            Ridho<span className="text-accent">.</span>
          </h1>
          <div className="flex flex-col gap-6 mt-20 px-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  pathname === link.path &&
                  "text-accent "
                } hover:text-accent-hover capitalize transition-all text-xl`}
              >
                {link.name}
              </Link>
            ))}

            <Button size="lg" className="rounded-full">
              Hire Me
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
