"use client";

import ActionBar from "@/components/common/ActionBar";
import { Button } from "@/components/ui/button";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { dummyFlashPosts } from "@/lib/dummy-db/blog";
import FlashPost from "@/components/blogs/FlashPost";
import { dummyClubs } from "@/lib/dummy-db/clubs";
import ClubCard from "@/components/clubs/ClubCard";

const ClubCollection = () => {
  const handleSearch = async (query: string) => {
    console.log("Search blogs with:", query);
    // Add your API/filtering logic
  };

  const handleFilterSelect = async (filter: string) => {
    console.log("Filter blogs by:", filter);
    // Add your filtering logic
  };

  const handleCreatePost = async () => {
    console.log("Create new blog post");
    // Add your logic to navigate to the create post page
  };
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-10 py-6">
      <section className="h-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent>
            {dummyFlashPosts.map((post) => (
              <CarouselItem key={post.postId} className="w-full h-full">
                <FlashPost {...post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="px-10 py-6 bg-gray-50">
        <div className="min-h-[60px] flex flex-col md:flex-row  items-center justify-between gap-y-[20px]">
          <div className="">
            <ActionBar
              placeholder="Search blogs..."
              onSearch={handleSearch}
              onFilterSelect={handleFilterSelect}
              filters={["Latest", "Popular", "Tech", "Events"]}
            />
          </div>
          <div className="">
            <Link href={"/clubs/create"}>
              <Button>Request Club Creation</Button>
            </Link>
          </div>
        </div>
        <div className="min-h-[40vh] mt-[80px]">
          <div className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-4 gap-y-20 mt-[30px]">
            {dummyClubs.map((club) => (
              <ClubCard key={club.clubId} {...club} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubCollection;
