"use client";

//next js
import Link from "next/link";
import { usePathname } from "next/navigation";

// components shadcn
import { Button } from "./ui/button";

//icons
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="">
      <div className="hidden xl:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } hover:text-accent-hover capitalize transition-all`}
          >
            {link.name}
          </Link>
        ))}

        <Button size="lg" className="rounded-full">
          Hire Me
        </Button>
      </div>
      <div className="block xl:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
