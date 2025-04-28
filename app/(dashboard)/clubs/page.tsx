import ClubList from "@/components/clubs/ClubList";
import ActionBar from "@/components/common/ActionBar";
import { Button } from "@/components/ui/button";
import React from "react";

const ClubCollection = () => {
  return (
    <div>
      <section className="h-[50vh] bg-secondary-100">
        Top Clubs by Member and Activities
      </section>
      <section className="bg-amber-200">
        All available Clubs
        <div className="h-[60px] bg-zinc-300 flex">
          <div className="flex-2/3">
            <ActionBar />
          </div>
          <div className="flex-1/3">
            <Button>Request Club Creation</Button>
          </div>
        </div>
        <div className="min-h-[40vh]">
          <h1>Club Tiles Expandible Squares on Click</h1>
          <div className="grid grid-cols-3">
            <ClubList />
            <ClubList />
            <ClubList />
            <ClubList />
            <ClubList />
            <ClubList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubCollection;
