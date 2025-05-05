import ClubBanner from "@/components/clubs/ClubBanner";
import React from "react";
import { dummyClubData } from "@/lib/dummy-db/clubs";
import { dummyBlogs } from "@/lib/dummy-db/blog";
import BlogCard from "@/components/blogs/BlogCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ClubBlogs = () => {
  const clubdata = dummyClubData;
  return (
    <div className="w-6xl min-h-screen bg-gray-100 pb-16">
      {/* Banner Section */}
      <ClubBanner bannerImg={clubdata.bannerUrl} clubLogo={clubdata.logoUrl} />
      {/* Club Blogs Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        {/* Action bar */}
        <div className="mb-10 flex justify-between">
          <div className="text-3xl font-bold text-indigo-700 tracking-tight mb-6">
            {clubdata.name}
            <span className="text-gray-600"> /Blogs</span>
          </div>

          <div className="">
            <Link href={"/blogs/create"}>
              <Button className="hover:bg-indigo-400 cursor-pointer p-5">
                Create Post
              </Button>
            </Link>
          </div>
        </div>

        {/* Blogs ALL*/}
        <div className="mb-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-[30px] place-items-center">
            {dummyBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBlogs;
