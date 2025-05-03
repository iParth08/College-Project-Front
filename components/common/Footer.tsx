import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import Link from "next/link";
import { Button } from "../ui/button";
import { navlinks, isLoggedIn } from "@/lib/constant";
import { suggestedEvents } from "@/lib/dummy-db/event";
import { suggestedBlogs } from "@/lib/dummy-db/blog";
import { LuLogIn } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="max-w-full bg-zinc-800 text-white flex flex-col items-center p-[30px]">
      {isLoggedIn ? (
        <div className="w-full md:w-[90%]">
          <div className="flex items-center justify-between mb-4">
            <Logo styles="text-5xl" />
            <Title styles="text-3xl" />
          </div>

          <div className="flex flex-col md:flex-row justify-evenly items-center mb-4">
            <section className="w-full flex flex-col mb-6 md:mb-0">
              <div className="flex flex-col space-y-2 items-center md:items-start">
                {navlinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="hover:underline text-lg hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </section>
            <section className="w-full  flex flex-col mb-6 md:mb-0 space-y-2 items-center md:items-center">
              <h2 className="text-2xl">Recent Events</h2>
              {/* Example content, replace with actual data */}
              {suggestedEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="hover:underline text-lg hover:text-indigo-400"
                >
                  <p>{event.name}</p>
                </Link>
              ))}
            </section>
            <section className="w-full  flex flex-col space-y-2 items-center md:items-end">
              <h2 className="text-2xl">Recent Blogs</h2>
              {/* Example content, replace with actual data */}
              {suggestedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className="hover:underline text-lg hover:text-indigo-400"
                >
                  <p>{blog.title}</p>
                </Link>
              ))}
            </section>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2.5">
          <Logo styles="text-5xl" />
          <Title styles="text-3xl" />
          <div className="text-center flex flex-col items-center justify-center mb-4 space-y-2.5">
            <p>Join and Explore your Inner Capmus</p>
            <Link href={"/register"}>
              <Button className="md:text-xl bg-gray-50 text-zinc-800 hover:bg-indigo-400 hover:text-white cursor-pointer text-sm flex items-center space-x-2">
                <LuLogIn />
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className="mt-6">
        © {new Date().getFullYear()} ClubConnect. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
