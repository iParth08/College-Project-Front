import Image from "next/image";
import React from "react";

interface ClubDetailProps {
  name: string;
  description: string;
  presidentId: string;
  presidentMessage: string;
}

const ClubDetail: React.FC<ClubDetailProps> = ({
  name,
  description,
  presidentMessage,
  presidentId = "presid",
}) => {
  //presidentID to find the details about president
  return (
    <div>
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2"></p>

        <p className="text-gray-600  mt-4">{description}</p>

        <div className="mt-6 flex items-start gap-4">
          <Image
            src="/avatars/boy1.jpeg"
            alt="President Rahul Sharma"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-700">President: Rahul Sharma</p>
            <p className="text-sm text-gray-500">
              National-level Footballer | B.Tech 3rd Year
            </p>
            <p className="mt-2 max-w-4xl italic text-gray-600">
              "{presidentMessage}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;
