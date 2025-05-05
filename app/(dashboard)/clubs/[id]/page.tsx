// app/club/[slug]/page.tsx
import { dummyClubData } from "@/lib/dummy-db/clubs";
import ClubBanner from "@/components/clubs/ClubBanner";
import ClubDetail from "@/components/clubs/ClubDetail";
import AnnouncementList from "@/components/clubs/AnnouncementList";
import CoreTeam from "@/components/clubs/CoreTeam";

const ClubPage = () => {
  const clubdata = dummyClubData;
  return (
    <div className="max-w-6xl min-h-screen bg-gray-100 pb-16">
      {/* Banner Section */}
      <ClubBanner bannerImg={clubdata.bannerUrl} clubLogo={clubdata.logoUrl} />
      {/* Club Info Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <ClubDetail
          name={clubdata.name}
          description={clubdata.description}
          presidentId={clubdata.presidentId}
          presidentMessage={clubdata.presidentMessage}
        />
        {/* Announcements */}
        <div className="mb-10">
          <AnnouncementList announcements={clubdata.announcements} />
        </div>

        {/* Core Members Showcase */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Core Team
          </h3>
          <CoreTeam members={clubdata.coreMembers} />
        </div>
      </div>
    </div>
  );
};

export default ClubPage;
