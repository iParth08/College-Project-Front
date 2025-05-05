import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Tag } from "lucide-react";
import Link from "next/link";

interface ClubCardProps {
  club: {
    _id: string;
    name: string;
    coverImage: string;
    logo: string;
    tags: string[];
    memberCount: number;
    announcements: { id: string; title: string }[];
  };
}

const JoinedClubCard = ({ club }: ClubCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg border bg-white flex flex-col">
      {/* Banner with Logo */}
      <div className="relative h-44 w-full">
        <img
          src={club.coverImage}
          alt={`${club.name} cover`}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
          <div className="flex items-end space-x-4">
            <img
              src={club.logo}
              alt="Club Logo"
              className="h-14 w-14 rounded-full border-2 border-white object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{club.name}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {club.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-400 text-white text-xs px-2 py-0.5 rounded-full"
                  >
                    <Tag size={12} className="inline mr-1" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        {/* Member count */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Users size={16} />
          <span>{club.memberCount} members</span>
        </div>

        {/* Announcements */}
        <div className="mb-4">
          <h4 className="font-medium text-md text-indigo-700 mb-2">
            Latest Announcements
          </h4>
          {club.announcements.length ? (
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {club.announcements.slice(0, 3).map((a) => (
                <li key={a.id}>{a.title}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No announcements</p>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/clubs/${club._id}`}
          className="mt-auto inline-block w-full text-center bg-indigo-400 hover:bg-indigo-500 text-white text-sm font-medium py-2 px-4 rounded-md transition"
        >
          Visit Clubhouse
        </Link>
      </div>
    </Card>
  );
};

export default JoinedClubCard;
