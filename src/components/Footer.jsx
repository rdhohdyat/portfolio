import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-white/80">
          &copy; {new Date().getFullYear()} Ridho Hidayat. All rights reserved.
        </p>
        <div className="mt-4">
          <Social
            containerStyle="flex gap-5 justify-center"
            iconStyle="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
