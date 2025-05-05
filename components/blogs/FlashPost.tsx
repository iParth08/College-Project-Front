import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThumbsUp, Eye, Tags, User } from "lucide-react";
import Image from "next/image";

interface FlashPostProps {
  title: string;
  author: string;
  description: string;
  tags: string[];
  upvotes: number;
  views: number;
  postId: string;
  imageUrl: string;
}

const FlashPost: React.FC<FlashPostProps> = ({
  title,
  author,
  description,
  tags,
  upvotes,
  views,
  postId,
  imageUrl,
}) => {
  return (
    <div className="w-full h-72 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl flex overflow-hidden">
      {/* Left Image Section */}
      <div className="w-2/5 h-full relative">
        <Image
          src={imageUrl}
          alt="Blog Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Text Content */}
      <div className="w-3/5 p-6 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex gap-2 items-center mb-2">
          <Tags className="w-4 h-4 opacity-80" />
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/20 px-2 py-0.5 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <div className="flex items-center text-sm mb-3">
            <User className="w-4 h-4 mr-1" /> {author}
          </div>
          <p className="text-md text-white/90 line-clamp-3">{description}</p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-4 text-sm items-center">
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {upvotes.toLocaleString()} upvotes
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views.toLocaleString()} views
            </span>
          </div>
          <Link href={`/blogs/${postId}`}>
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold">
              Dive More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashPost;
