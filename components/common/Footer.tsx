"use client";

import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import Link from "next/link";
import { Button } from "../ui/button";
import { navlinks } from "@/lib/constant";
import { suggestedEvents } from "@/lib/dummy-db/event";
import { suggestedBlogs } from "@/lib/dummy-db/blog";
import { LuLogIn } from "react-icons/lu";
import { useUser } from "@/context/UserContext";

const Footer = () => {
  const { isLoggedIn } = useUser();

  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-5 md:px-16">
      {isLoggedIn ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-400">
              Explore
            </h3>
            <ul className="space-y-2">
              {navlinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-indigo-300 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Events */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-400">
              Recent Events
            </h3>
            <ul className="space-y-2">
              {suggestedEvents.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/events/${event.id}`}
                    className="hover:text-indigo-300 transition"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blogs */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-400">
              Recent Blogs
            </h3>
            <ul className="space-y-2">
              {suggestedBlogs.map((blog) => (
                <li key={blog.id}>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="hover:text-indigo-300 transition"
                  >
                    {blog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 max-w-md mx-auto text-center">
          <Logo styles="text-4xl md:text-5xl" color="text-white" />
          <Title styles="text-xl md:text-4xl" color="text-white" />
          <p className="text-gray-400">Join and explore your inner campus.</p>
          <Link href={"/register"}>
            <Button className="md:text-lg bg-white text-zinc-800 hover:bg-indigo-500 hover:text-white px-6 py-2 cursor-pointer">
              <LuLogIn className="mr-2" />
              Register
            </Button>
          </Link>
        </div>
      )}

      {/* Footer bottom */}
      <div className="border-t border-zinc-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ClubConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
