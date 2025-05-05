"use client";

import React, { useState } from "react";
import ClubBanner from "@/components/clubs/ClubBanner";
import PostQueryForm from "@/components/clubs/PostQueryForm";
import QueryList from "@/components/clubs/QueryList";
import { dummyClubData } from "@/lib/dummy-db/clubs";
import { v4 as uuidv4 } from "uuid";

const ClubQuery = () => {
  const clubdata = dummyClubData;
  const clubId = dummyClubData.clubId;
  const [queries, setQueries] = useState([
    {
      id: "q-1",
      question: "What are the prerequisites for the upcoming AI workshop?",
      answers: [
        {
          id: "a-1",
          text: "Just basic Python knowledge will do.",
          answeredBy: "Core Member",
        },
      ],
    },
  ]);

  const userRole: "Club Member" | "Core Member" | "Guest" = "Club Member"; // Assume role

  const handlePostQuery = (question: string) => {
    setQueries((prev) => [...prev, { id: uuidv4(), question, answers: [] }]);
  };

  const handleAddAnswer = (queryId: string, answerText: string) => {
    setQueries((prev) =>
      prev.map((q) =>
        q.id === queryId
          ? {
              ...q,
              answers: [
                ...q.answers,
                {
                  id: uuidv4(),
                  text: answerText,
                  answeredBy: userRole,
                },
              ],
            }
          : q
      )
    );
  };

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
            <span className="text-gray-600"> /Queries</span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Generate Query
          </h3>
          <PostQueryForm clubId={clubId} onPostQuery={handlePostQuery} />;
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Core Team
          </h3>
          <QueryList
            clubId={clubId}
            userRole={userRole}
            initialQueries={queries}
            onAddAnswer={handleAddAnswer}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default ClubQuery;
