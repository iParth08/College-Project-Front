import BlogCard from "@/components/blogs/BlogCard";
import ClubCard from "@/components/clubs/ClubCard";
import Adboard from "@/components/dashboard/Adboard";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { dummyTop2Blogs } from "@/lib/dummy-db/blog";
import { dummyTop4Clubs } from "@/lib/dummy-db/clubs";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { dummyTop3Events } from "@/lib/dummy-db/event";

const page = () => {
  return (
    <div>
      <section className="min-h-[60vh] w-full bg-secondary-100">
        <Adboard />
      </section>
      <section className="min-h-[45vh] w-full p-[30px]">
        <div className="flex items-center justify-between pb-2 mb-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-indigo-700 tracking-tight flex gap-3 items-center">
            <FaPeopleRoof />
            Clubs
          </h1>
          <Link href="/clubs">
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-400 hover:text-white cursor-pointer"
            >
              All Clubs
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 p-8">
          {/* Slideable blogs collection here */}
          {dummyTop4Clubs.map((club) => (
            <ClubCard key={club.clubId} {...club} />
          ))}
        </div>
      </section>
      <section className="min-h-[45vh] w-full p-[30px] bg-gray-100">
        <div className="flex items-center justify-between pb-2 mb-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-indigo-700 tracking-tight flex gap-3 items-center">
            <MdEmojiEvents />
            Events/Workshops
          </h1>
          <Link href="/events">
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-400 hover:text-white cursor-pointer"
            >
              All Events
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8">
          {/* Slideable blogs collection here */}
          {dummyTop3Events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      <section className="min-h-[45vh] w-full p-[30px]">
        <div className="flex items-center justify-between pb-2 mb-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-indigo-700 tracking-tight flex gap-3 items-center">
            <MdEmojiEvents />
            Blogs
          </h1>
          <Link href="/blogs">
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-400 hover:text-white cursor-pointer"
            >
              All Blogs
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-8">
          {/* Slideable blogs collection here */}

          {dummyTop2Blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
