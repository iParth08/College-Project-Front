import BlogList from "@/components/blogs/BlogList";
import FlashPost from "@/components/blogs/FlashPost";
import ActionBar from "@/components/common/ActionBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BlogCollection = () => {
  return (
    <div>
      <section className="h-[50vh] bg-secondary-100">
        Most Read, top Blogs crousel
        <FlashPost />
      </section>
      <section className="bg-amber-200">
        List of rest blogs, with filter and search option
        <div className="h-[60px] bg-zinc-300 flex items-center">
          <div className="flex-2/3">
            <ActionBar />
          </div>
          <div className="flex-1/3">
            <Link href={"/blogs/create"}>
              <Button>Create Post</Button>
            </Link>
          </div>
        </div>
        <div className="min-h-[40vh]">
          <h2>All Blogs [Filter Title]</h2>
          <div className="max-w-6xl space-y-2">
            {/* map filtered blogs here */}
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCollection;
