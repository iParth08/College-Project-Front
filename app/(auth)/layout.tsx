import SplashScreen from "@/components/common/SplashScreen";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex md:justify-end">
      <SplashScreen backgroundImageUrl="/splash/event-cover.jpg" />
      <main className="">{children}</main>
    </div>
  );
};

export default layout;
