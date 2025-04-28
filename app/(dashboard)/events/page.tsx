import ActionBar from "@/components/common/ActionBar";
import EventList from "@/components/events/EventList";
import FlashEvent from "@/components/events/FlashEvent";
import React from "react";

const EventCollections = () => {
  return (
    <div>
      <section className="h-[50vh] bg-secondary-100">
        {/* Top three events or workshops */}
        <FlashEvent />
      </section>
      <section className="bg-amber-200">
        List of rest blogs, with filter and search option
        <div className="h-[60px] bg-zinc-300 flex items-center">
          <div className="flex-2/3">
            <ActionBar />
          </div>
          <div className="flex-1/3">Live Events : 03</div>
        </div>
        <div className="min-h-[40vh]">
          <h2>All Blogs [Filter Title]</h2>
          <div className="max-w-6xl space-y-2">
            {/* map filtered events here */}
            {/* hover video */}
            <EventList />
            <EventList />
            <EventList />
            <EventList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCollections;
