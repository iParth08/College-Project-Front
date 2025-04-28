import EventComments from "@/components/comments/EventComments";
import SingleEvent from "@/components/events/SingleEvent";
import React from "react";

const Event = () => {
  return (
    <div>
      <SingleEvent />
      <EventComments />
    </div>
  );
};

export default Event;
