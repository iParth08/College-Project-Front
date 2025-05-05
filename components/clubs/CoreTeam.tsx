import React from "react";
import Image from "next/image";

interface CoreMember {
  id: string;
  name: string;
  role: string;
  profile: string; // path to image
  clubPoints?: number;
}

interface CoreTeamProps {
  members: CoreMember[];
}

const CoreTeam: React.FC<CoreTeamProps> = ({ members }) => {
  return (
    <div className="mt-10">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-indigo-100">
        {members.map((member, i) => (
          <div
            key={i}
            className="min-w-[200px] bg-white rounded-xl shadow-lg flex-shrink-0 overflow-hidden relative"
          >
            {/* Top Indigo Section */}
            <div className="bg-indigo-300 h-20 w-full relative">
              <div className="absolute inset-x-0 top-[50%] flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <Image
                    src={member.profile}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-12 pb-4 text-center px-4">
              <p className="text-gray-800 font-semibold text-lg">
                {member.name}
              </p>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              {member.role === "Club Member" && (
                <div className="mt-2 bg-indigo-50 text-indigo-700 text-sm font-semibold py-1 px-3 rounded-full inline-block shadow-sm">
                  🏆 {member.clubPoints} Club Points
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
