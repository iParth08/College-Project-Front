"use client";

import React from "react";
import JoinRequestCard from "./JoinRequestCard";
import { dummyJoinRequest } from "@/lib/dummy-db/clubs";

interface JoinRequestsProps {
  clubId: string;
}

const JoinRequests: React.FC<JoinRequestsProps> = ({ clubId }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyJoinRequest.length ? (
          dummyJoinRequest.map((request) => (
            <JoinRequestCard key={request.id} request={request} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No join requests available.
          </p>
        )}
      </div>
    </div>
  );
};

export default JoinRequests;
