"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Avatar from "./Avatar";
import { Button } from "../ui/button";
import Ranking from "./Ranking";
import { HiOutlineBars3 } from "react-icons/hi2";
import { isLoggedIn, navlinks } from "@/lib/constant";
import { LuLogIn } from "react-icons/lu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for collapsible menu
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-full h-[15vh] bg-gray-50 text-zinc-800 flex justify-between items-center px-[90px]">
      <div className="flex space-x-6">
        <Logo styles="md:text-3xl text-lg font-semibold" />
        <Title styles="md:text-3xl text-lg text-indigo-500" />
      </div>

      {/* Main menu for larger screens */}
      {isLoggedIn && (
        <div className="hidden md:flex space-x-4">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-lg px-3 py-1 rounded-md transition-all duration-200 ${
                pathname === link.path
                  ? "text-indigo-500 underline"
                  : "hover:text-indigo-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Avatar or Register button */}
      <div>
        {isLoggedIn ? (
          <div className="flex items-center space-x-2">
            <Avatar />
            <Ranking />
          </div>
        ) : (
          <Link href={"/login"}>
            <Button className="md:text-xl bg-indigo-500 hover:bg-indigo-400 cursor-pointer text-sm flex items-center space-x-2">
              <LuLogIn />
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Hamburger menu for small screens */}
      {isLoggedIn && (
        <div className="md:hidden">
          <HiOutlineBars3
            className="h-8 w-8 cursor-pointer"
            onClick={() => handleMenuToggle()}
            aria-label="Menu"
          />
        </div>
      )}

      {/* Collapsible menu for small screens */}
      {menuOpen && (
        <div className="md:hidden absolute top-[15vh] left-0 right-0 bg-zinc-800 text-white flex flex-col space-y-2 px-4 py-2">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block text-lg px-3 py-2 rounded-md transition-all ${
                pathname === link.path
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-400 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
