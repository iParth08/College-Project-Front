import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EventList = () => {
  return (
    <div className="max-w-6xl h-[300px] bg-pink-400 flex">
      <div className="flex-2/3">
        <span>CL</span>
        <h1>Title</h1>
        {/* BgImage */}
      </div>

      <div className="flex-1/3">
        <div>eye : 99</div>
        <div>People : 70</div>
        <div>
          <Link href="/events/eventId">
            <Button>Arrow</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventList;

// Hover, video play ??
