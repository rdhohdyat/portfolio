import React from "react";

import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-accent text-xl font-bold" />
      </SheetTrigger>
      <SheetContent>hallo world bro owkwk</SheetContent>
    </Sheet>
  );
};

export default MobileNav;
