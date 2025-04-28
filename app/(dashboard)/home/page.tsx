import BlogList from "@/components/blogs/BlogList";
import ClubCard from "@/components/clubs/ClubCard";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="h-[60vh] w-full bg-secondary-100">
        Highlight Events Carousel
      </section>
      <section className="h-[45vh] w-full bg-red-400">
        <div className="flex justify-between">
          <h1>Clubs</h1>
          <Link href={"/clubs"}>
            <Button variant="outline">All Clubs</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8">
          <ClubCard />
          <ClubCard />
          <ClubCard />
          {/* Slideable blogs collection here */}
        </div>
      </section>
      <section className="h-[45vh] w-full bg-yellow-400">
        <div className="flex justify-between">
          <h1>Events</h1>
          <Link href={"/events"}>
            <Button variant="outline">All Events</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8">
          <EventCard />
          <EventCard />
          <EventCard />
          {/* Slideable blogs collection here */}
        </div>
      </section>
      <section className="min-h-[45vh] w-full bg-green-400">
        <div className="flex justify-between">
          <h1>Blogs</h1>
          <Link href={"/blogs"}>
            <Button variant="outline">All Blogs</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-8">
          <BlogList />
          <BlogList />
          {/* Slideable blogs collection here */}
        </div>
      </section>
    </div>
  );
};

export default page;
