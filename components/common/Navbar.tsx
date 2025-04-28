import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-full h-[7vh] bg-zinc-800 text-white flex justify-evenly items-center">
      <div className="flex space-x-4">
        <span>Logo</span>
        <span>Name</span>
      </div>

      <div className="flex space-x-2">
        <Link href="/home">Home</Link>
        <Link href="/clubs">Clubs</Link>
        <Link href="/events">Events</Link>
        <Link href="/blogs">Blogs</Link>
      </div>

      <div>Avatar or Login/Signup</div>
      <div>Ranking</div>
    </div>
  );
};

export default Navbar;
