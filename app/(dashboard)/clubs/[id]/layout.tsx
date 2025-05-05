import ClubMenu from "@/components/clubs/ClubMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <ClubMenu />
      <div className="h-full md:w-15 w-12"></div>
      <main className="w-full px-5 py-7 flex justify-center">
        <div className="w-full max-w-6xl">{children}</div>
      </main>
    </div>
  );
};

export default layout;
