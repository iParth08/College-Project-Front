"use client";

import React, { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, Bookmark, BookmarkCheck } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { dummyPost, suggestedBlogs } from "@/lib/dummy-db/blog";
import Image from "next/image";
import Link from "next/link";

const SinglePost = ({ postId }: { postId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [votes, setVotes] = useState(dummyPost.upvotes);
  const [userVote, setUserVote] = useState(0); // 1 = upvoted, -1 = downvoted

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleVote = (delta: number) => {
    if (userVote === 0) {
      setVotes((v) => v + delta);
      setUserVote(delta);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 px-4 md:px-10 py-6">
      {/* Main Section */}
      <div className="w-full md:w-2/3">
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[350px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-[40px] w-[350px]" />
              <Skeleton className="h-[80px] w-[200px]" />
            </div>
          </div>
        ) : (
          <div className="mb-10">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl text-indigo-400 font-bold">
                {dummyPost.title}
              </h1>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleVote(1)}
                  disabled={userVote !== 0}
                  className={`${
                    userVote === 1 ? "text-green-600" : "hover:text-green-600"
                  } transition-colors`}
                >
                  <ThumbsUp size={20} />
                </button>
                <span className="text-sm font-semibold">{votes}</span>
                <button
                  onClick={() => handleVote(-1)}
                  disabled={userVote !== 0}
                  className={`${
                    userVote === -1 ? "text-red-600" : "hover:text-red-600"
                  } transition-colors`}
                >
                  <ThumbsDown size={20} />
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {isBookmarked ? (
                    <BookmarkCheck size={20} />
                  ) : (
                    <Bookmark size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground mb-2">
              Tags:{" "}
              {dummyPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 px-2 py-1 bg-gray-100 rounded text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-5">
              {dummyPost.image && (
                <img
                  src={dummyPost.image}
                  alt="Blog Banner"
                  className="w-full h-auto rounded-lg shadow-sm mb-6"
                />
              )}
            </div>

            {/* Render content here */}
            <div
              className="text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: dummyPost.content }}
            ></div>
          </div>
        )}
      </div>

      {/* Side Section */}
      <div className="w-full md:w-1/3">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-6 w-1/2 mt-6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={dummyPost.author.image}
                  alt="Author"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{dummyPost.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dummyPost.author.classBranch}
                  </p>
                  {dummyPost.author.club && (
                    <span className="inline-block mt-1 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded">
                      {dummyPost.author.club}
                    </span>
                  )}
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-1">Profile</h4>
              <p className="text-gray-700 mb-3">{dummyPost.author.profile}</p>

              <h4 className="text-lg font-semibold mb-1">Comment</h4>
              <p className="text-gray-700">{dummyPost.author.comment}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Similar Posts</h2>
              <ul className="text-sm text-muted-foreground list-disc pl-5">
                {suggestedBlogs.map((blog) => (
                  <li key={blog.id} className="mb-2">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="hover:text-indigo-500"
                    >
                      {blog.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
