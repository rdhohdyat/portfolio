import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-accent text-2xl font-bold" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="text-2xl mt-14 mb-14 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ridho<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } hover:text-accent-hover capitalize transition-all text-xl`}
            >
              {link.name}
            </Link>
          ))}

          <Button size="lg" className="rounded-full">
            Hire Me
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
