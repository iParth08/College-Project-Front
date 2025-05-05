// components/flash/FlashEvent.tsx
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Tags } from "lucide-react";

interface FlashEventProps {
  eventId: string;
  imageUrl: string;
  title: string;
  type: string;
  clubName: string;
  venue: string;
  date: string;
  participants: number;
}

const FlashEvent: React.FC<FlashEventProps> = ({
  eventId,
  imageUrl,
  title,
  type,
  clubName,
  venue,
  date,
  participants,
}) => {
  return (
    <div className="w-full h-72 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl flex overflow-hidden">
      {/* Image Section */}
      <div className="w-2/5 h-full relative">
        <Image
          src={imageUrl}
          alt="Event Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-3/5 p-6 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-2">
          <Tags className="w-4 h-4 opacity-80" />
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
            {type}
          </span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
            by {clubName}
          </span>
        </div>

        {/* Title and Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/90 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {venue}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {participants} joined
            </span>
          </div>
          <p className="text-md text-white/90 line-clamp-2">
            Don’t miss out on this {type.toLowerCase()} organized by {clubName}.
          </p>
        </div>

        {/* Action */}
        <div className="flex justify-end mt-4">
          <Link href={`/events/${eventId}`}>
            <Button className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold">
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashEvent;
