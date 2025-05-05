"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui or your custom button component

interface JoinRequest {
  id: string;
  name: string;
  studentId: string;
  streamYear: string;
  profile: string;
  email: string;
}

interface JoinRequestCardProps {
  request: JoinRequest;
}

const JoinRequestCard: React.FC<JoinRequestCardProps> = ({ request }) => {
  const onApprove = (applicantId: string) => {
    console.log("Approved your joining");
  };
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-4 flex items-center justify-between gap-6 hover:shadow-lg transition-shadow">
      {/* Profile Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-500 shadow">
        <Image
          src={request.profile}
          alt={request.name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Student Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{request.name}</h3>
        <p className="text-sm text-gray-500">
          Student ID: <span className="font-medium">{request.studentId}</span>
        </p>
        <p className="text-sm text-gray-500">
          Stream & Year:{" "}
          <span className="font-medium">{request.streamYear}</span>
        </p>
        <p className="text-sm text-gray-500">
          Email: <span className="font-medium">{request.email}</span>
        </p>
      </div>

      {/* Action */}
      <div className="flex flex-col items-ends">
        <Button
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
          onClick={() => onApprove(request.id)}
        >
          Approve
        </Button>
      </div>
    </div>
  );
};

export default JoinRequestCard;
