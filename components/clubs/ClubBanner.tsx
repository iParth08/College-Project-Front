import Image from "next/image";
import React from "react";

type ClubBannerProps = {
  bannerImg: string;
  clubLogo: string;
};

const ClubBanner: React.FC<ClubBannerProps> = ({ bannerImg, clubLogo }) => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-72 bg-indigo-600 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={bannerImg}
            alt="Club Banner"
            layout="fill"
            objectFit="cover"
            priority // if needed for preloading
          />
        </div>

        {/* Club Logo (half-out from banner) */}
        <div className="absolute left-10 bottom-[-40px] w-28 h-28 rounded-full bg-white shadow-lg border-4 border-indigo-600 overflow-hidden">
          <Image
            src={clubLogo}
            alt="Club Logo"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ClubBanner;
