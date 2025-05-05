import EventCommentPanel from "@/components/comments/EventComments";
import SingleEvent from "@/components/events/SingleEvent";
import React from "react";

const Event = () => {
  return (
    <div>
      <SingleEvent />
      <EventCommentPanel
        eventId="e1"
        user={{ name: "Alice", image: "/avatar.jpg" }}
      />
    </div>
  );
};

export default Event;
