"use client";

import SinglePost from "@/components/blogs/SinglePost";
import React from "react";
import { useParams } from "next/navigation";
import BlogCommentPanel from "@/components/comments/BlogComments";

const Blog = () => {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="flex flex-col max-w-7xl items-center min-h-screen bg-gray-50 p-4 m-auto mt-10">
      <SinglePost postId={id} />
      <BlogCommentPanel
        blogId={id}
        user={{ name: "Parth", image: "/hero/e1.jpg" }}
      />
    </div>
  );
};

export default Blog;
