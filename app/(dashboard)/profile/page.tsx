"use client";

import { useEffect, useState } from "react";
import { dummyUser } from "@/lib/dummy-db/user";
import { EventTicket } from "@/components/events/Ticket";
import { dummyTop2Blogs } from "@/lib/dummy-db/blog";
import BlogCard from "@/components/blogs/BlogCard";
import JoinedClubCard from "@/components/profile/JoinedClubCard";
import UserProfileCard from "@/components/profile/UserProfileCard";

type UserProfile = {
  name: string;
  email: string;
  profile: {
    picture: string;
    bio: string;
    studentId: string;
    interests: string[];
    idcardUrl: string;
    resumeUrl: string;
  };
  clubs: {
    _id: string;
    name: string;
    coverImage: string;
    announcements: { title: string; id: string }[];
  }[];
  registeredEvents: { name: string; ticketUrl: string }[];
  blogs: { title: string; id: string }[];
};

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Dummy fetch - replace with actual API call
    setUser(dummyUser); // For testing purposes, replace with actual API call
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-20">
      {/* Section 1: Profile Overview */}
      <UserProfileCard />

      {/* Section 2: Clubs & Events */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-indigo-500">
          Joined Clubs & Tickets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dummyUser.clubs.map((club) => (
            <JoinedClubCard key={club._id} club={club} />
          ))}
        </div>

        {/* Event Tickets */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-indigo-500">
            Event Tickets
          </h2>
          <div className="flex flex-wrap gap-4 space-x-5">
            {user.registeredEvents.map((ev, idx) => (
              <a key={idx} href={ev.ticketUrl} target="_blank" rel="noreferrer">
                <EventTicket
                  ticket={{
                    ticketToken: "unique-token-abc123",
                    hasPaid: true,
                    createdAt: "2025-05-03T10:00:00Z",
                    event: {
                      _id: "evt-123",
                      title: "TechX 2025",
                      date: "May 20, 2025",
                      time: "10:00 AM - 4:00 PM",
                      venue: "Main Auditorium",
                      imageUrl: "/ticket.jpg",
                    },
                    user: {
                      _id: "user-001",
                      name: "Shwet Prakash",
                      email: "shwet@example.com",
                    },
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Blogs */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-indigo-500">
          Your Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {user.blogs.length > 0 ? (
            dummyTop2Blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} /> // Assuming BlogCard takes a blog prop
            ))
          ) : (
            <p className="text-muted-foreground">
              You haven't written any blogs yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
