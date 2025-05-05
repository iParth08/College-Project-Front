import ClubBanner from "@/components/clubs/ClubBanner";
import React from "react";
import { dummyClubData } from "@/lib/dummy-db/clubs";
import CoreTeam from "@/components/clubs/CoreTeam";
import JoinRequests from "@/components/clubs/JoinRequests";

const ClubMembers = () => {
  const clubdata = dummyClubData;
  return (
    <div className=" min-h-screen bg-gray-100 pb-16">
      {/* Banner Section */}
      <ClubBanner bannerImg={clubdata.bannerUrl} clubLogo={clubdata.logoUrl} />
      {/* Club Blogs Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        {/* Action bar */}
        <div className="mb-10 flex justify-between">
          <div className="text-3xl font-bold text-indigo-700 tracking-tight mb-6">
            {clubdata.name}
            <span className="text-gray-600"> /Members</span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Club Join Requests
          </h3>
          <JoinRequests clubId={clubdata.clubId} />
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Core Team
          </h3>
          <CoreTeam members={clubdata.coreMembers} />
        </div>

        {/* ALL Recent Members highest club points*/}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Club Members
          </h3>
          <CoreTeam members={clubdata.members} />
        </div>
      </div>
    </div>
  );
};

export default ClubMembers;
