import React from "react";
import { Button } from "../ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

type EventCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  clubName: string;
  venue: string;
  date: string;
  participants: number;
  isRegistered: boolean;
};

const EventCard: React.FC<EventCardProps> = ({
  id,
  imageUrl,
  title,
  type,
  clubName,
  venue,
  date,
  participants,
  isRegistered,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-2xl mx-auto">
      {/* Top Image */}
      <div className="h-[250px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

        {/* Tag */}
        <div className="text-sm px-3 py-1 inline-block bg-indigo-100 text-indigo-700 rounded-full font-medium">
          {type} • {clubName}
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600 mt-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {venue}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {participants} Joined
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4">
          <Link href={`/events/${id}`}>
            <Button variant="outline">See Details</Button>
          </Link>
          {/* Conditional Button based on Registration Status */}
          {isRegistered ? (
            <Link href={`/profile`}>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                View Your Ticket
              </Button>
            </Link>
          ) : (
            <Link href={`/events/${id}/register`}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Get a Ticket
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
