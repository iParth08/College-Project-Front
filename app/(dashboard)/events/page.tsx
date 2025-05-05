"use client";

import ActionBar from "@/components/common/ActionBar";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CalendarDays, CircleDot } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EventCard from "@/components/events/EventCard";
import { dummyEvents, dummyFlashEvents } from "@/lib/dummy-db/event";
import FlashEvent from "@/components/events/FlashEvent";

const EventCollection = () => {
  // const liveCount = dummyClubs.filter((club) => club.isLive).length;
  const liveCount = 6;
  const totalCount = 8;
  const handleSearch = async (query: string) => {
    console.log("Search blogs with:", query);
    // Add your API/filtering logic
  };

  const handleFilterSelect = async (filter: string) => {
    console.log("Filter blogs by:", filter);
    // Add your filtering logic
  };

  const handleCreatePost = async () => {
    console.log("Create new blog post");
    // Add your logic to navigate to the create post page
  };
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-10 py-6">
      <section className="h-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent>
            {dummyFlashEvents.map((event) => (
              <CarouselItem key={event.eventId} className="w-full h-full">
                <FlashEvent {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="px-10 py-6 bg-gray-50">
        <div className="min-h-[60px] flex flex-col md:flex-row  items-center justify-between gap-y-[20px]">
          <div className="">
            <ActionBar
              placeholder="Search blogs..."
              onSearch={handleSearch}
              onFilterSelect={handleFilterSelect}
              filters={["Latest", "Popular", "Tech", "Events"]}
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm md:text-base font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <CircleDot className="text-green-500 w-4 h-4 animate-pulse" />
              <span className="text-green-600">{liveCount} Live</span>
            </div>
            <span className="text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <CalendarDays className="text-blue-500 w-4 h-4" />
              <span className="text-blue-600">{totalCount} Events Total</span>
            </div>
          </div>
        </div>
        <div className="min-h-[40vh] mt-[80px]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8">
            {dummyEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCollection;
