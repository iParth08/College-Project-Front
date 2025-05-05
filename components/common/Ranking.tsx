import React from "react";
import { Medal, Star } from "lucide-react";

const Ranking = () => {
  const points = 1200; // Example points, replace with actual data
  const rank = 5; // Example rank, replace with actual data
  return (
    <div className="w-full max-w-sm mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold text-center text-zinc-800 dark:text-zinc-100">
        Your Performance
      </h2>

      <div className="flex items-center justify-between w-full px-4">
        <div className="flex flex-col items-center">
          <Star className="text-yellow-400" size={28} />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Points
          </p>
          <span className="text-xl font-bold text-zinc-800 dark:text-white">
            {points}
          </span>
        </div>

        <div className="h-12 w-px bg-gray-300 dark:bg-zinc-700" />

        <div className="flex flex-col items-center">
          <Medal className="text-indigo-500" size={28} />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Rank</p>
          <span className="text-xl font-bold text-zinc-800 dark:text-white">
            #{rank}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
