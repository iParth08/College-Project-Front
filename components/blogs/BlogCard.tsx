"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Eye, ThumbsUp } from "lucide-react";

type BlogCardProps = {
  id: string;
  title: string;
  media?: string;
  content: string;
  author: { name: string };
  clubBadge?: { name: string };
  tags: string[];
  upvotes: number;
  viewCount: number;
};

const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  media,
  content,
  author,
  clubBadge,
  tags,
  upvotes,
  viewCount,
}) => {
  return (
    <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
      {media && (
        <div className="w-1/3 relative h-52">
          <Image
            src={media}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <div className="flex flex-wrap gap-2 items-center mb-1">
            {clubBadge && (
              <Badge className="bg-indigo-600 text-white">
                {clubBadge.name}
              </Badge>
            )}
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{content}</p>
        </div>

        <div className="flex justify-between items-end mt-4 text-sm">
          <div>
            <p className="text-gray-500">By {author.name}</p>
            <div className="flex items-center gap-3 text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" /> {upvotes}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" /> {viewCount}
              </span>
            </div>
          </div>

          <Link
            href={`/blogs/${id}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
