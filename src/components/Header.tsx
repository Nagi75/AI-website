import React from "react";
import { brainwaveSymbol } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-xl">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 w-full justify-between max-lg:py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={brainwaveSymbol} alt="Brainwave Logo" width={28} height={28} />
          <span className="text-n-1 font-bold text-lg">Brainwave</span>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-10 text-sm">
          {navigation
            .filter((item) => !item.onlyMobile)
            .map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="uppercase text-n-3 hover:text-n-1 transition-colors font-code"
              >
                {item.title}
              </a>
            ))}
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#signup"
            className="uppercase text-sm text-n-3 hover:text-white font-code"
          >
            New Account
          </a>
          <Button href="#login">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
