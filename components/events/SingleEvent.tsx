// app/event/[id]/page.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Dummy Event Data (replace with fetch)
const event = {
  eventId: "12345",
  type: "Event",
  title: "Tech Symposium 2025",
  description:
    "Join us for an exciting day of tech talks, workshops, and networking!",
  bannerImage: "/hero/e1.jpg",
  date: new Date().toLocaleString(),
  location: {
    address: "IIT Campus, Delhi, India",
    coordinates: {
      lat: 28.5449,
      lng: 77.1926,
    },
  },
  createdByClub: {
    name: "Tech Club",
    description: "Innovating tomorrow, today.",
  },
  registration: {
    isPaid: true,
    price: 150,
    maxParticipants: 100,
    deadline: new Date(new Date().getTime() + 86400000).toLocaleString(),
  },
  participants: new Array(42).fill({}),
};

const SingleEvent = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src={event.bannerImage}
          alt="Event Banner"
          fill
          className="object-cover"
        />
      </div>

      <section className="px-4 md:px-10 lg:px-20 flex flex-col md:flex-row gap-6">
        <div>
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-gray-700 mt-2">{event.description}</p>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              <strong>Date & Time:</strong> {event.date}
            </p>
            <p>
              <strong>Venue:</strong> {event.location.address}
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Organizer</h2>
            <p>{event.createdByClub.name}</p>
            <p className="text-gray-600">{event.createdByClub.description}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Participants</h2>
            <p>
              {event.participants.length} registered out of{" "}
              {event.registration.maxParticipants}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4">
            {event.registration.isPaid ? (
              <>
                <span className="text-lg font-semibold text-green-600">
                  ₹{event.registration.price}
                </span>
                <Button>Buy Ticket</Button>
              </>
            ) : (
              <Button>Register Now</Button>
            )}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Event Location Map</h2>
          <div className="w-full h-[300px] rounded-xl overflow-hidden">
            {/* Replace with your map component */}
            <p>Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleEvent;
