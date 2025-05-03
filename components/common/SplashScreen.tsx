import Link from "next/link";
import React from "react";

interface SplashScreenProps {
  backgroundImageUrl: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ backgroundImageUrl }) => {
  return (
    <div className="relative h-screen w-[600px] md:w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-4 text-center px-4">
        <span className="h-[200px] w-[200px] text-7xl bg-white text-red-400 rounded-full flex justify-center items-center animate-pulse">
          CC
        </span>
        <h1 className="text-[72px] text-white font-bold">ClubConnect</h1>
        <p className="text-white text-lg">
          Connect with your club members and stay updated with the latest
          events.
        </p>

        <div className="md:hidden mt-3.5">
          <Link href="/home">
            <button className="bg-red-500 text-white px-14 py-4 text-2xl rounded-md hover:bg-red-600 transition duration-300">
              Dive In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
