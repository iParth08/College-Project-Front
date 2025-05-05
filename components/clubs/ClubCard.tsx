"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Users, Star, FileText } from "lucide-react";
import Link from "next/link";

interface ClubCardProps {
  logoUrl: string;
  name: string;
  description: string;
  tags: string[];
  membersCount: number;
  postCount: number;
  rating: number;
  isMember: boolean;
  clubId: string;
}

const ClubCard: React.FC<ClubCardProps> = ({
  logoUrl,
  name,
  description,
  tags,
  membersCount,
  postCount,
  rating,
  isMember,
  clubId,
}) => {
  const [requestSent, setRequestSent] = useState(false);

  const handleRequestToJoin = () => {
    // Call your API or function here later
    // await requestToJoinClub(clubId); (you can implement this)
    setRequestSent(true);
  };
  return (
    <div className="relative w-80 h-[420px] bg-white rounded-xl shadow-xl p-4 pt-16 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Logo - Emerging out */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md bg-white overflow-hidden">
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Club Name */}
      <h2 className="text-xl font-bold mt-2">{name}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1 mb-2 px-2 line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 text-xs text-white mt-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className="bg-indigo-500 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-around text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {membersCount} Members
        </div>
        <div className="flex items-center gap-1">
          <FileText className="w-4 h-4" />
          {postCount} Posts
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
          {rating.toFixed(1)}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 px-4 mt-10">
        <Button asChild>
          <Link href={`/clubs/${clubId}`} className="w-full">
            Visit Club
          </Link>
        </Button>
        {!isMember && (
          <Button
            onClick={handleRequestToJoin}
            className={`w-full ${
              requestSent
                ? "bg-green-700 text-white hover:bg-green-600"
                : "bg-indigo-400"
            }`}
            disabled={requestSent}
          >
            {requestSent ? "Request Sent" : "Apply to Join"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClubCard;
