import ClubBanner from "@/components/clubs/ClubBanner";
import React from "react";
import { dummyClubData } from "@/lib/dummy-db/clubs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dummyEvents } from "@/lib/dummy-db/event";
import EventCard from "@/components/events/EventCard";

const ClubEvents = () => {
  const clubdata = dummyClubData;
  return (
    <div className="w-6xl min-h-screen bg-gray-100 pb-16">
      {/* Banner Section */}
      <ClubBanner bannerImg={clubdata.bannerUrl} clubLogo={clubdata.logoUrl} />
      {/* Club Blogs Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        {/* Action bar */}
        <div className="mb-10 flex justify-between">
          <div className="text-3xl font-bold text-indigo-700 tracking-tight mb-6">
            {clubdata.name}
            <span className="text-gray-600"> /Events & Workshops</span>
          </div>

          <div className="">
            <Link href={`/clubs/${clubdata.clubId}/events/create`}>
              <Button className="hover:bg-indigo-400 cursor-pointer p-5">
                Create Events
              </Button>
            </Link>
          </div>
        </div>

        {/* Blogs ALL*/}
        <div className="mb-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8">
            {dummyEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubEvents;
