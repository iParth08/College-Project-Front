"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Ranking from "./Ranking";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const AvatarBox = () => {
  const { user, logout } = useUser();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "/api/auth/logout",

        {
          withCredentials: true, // Important if backend sets cookies
        }
      );
      if (response.status === 200) {
        console.log(response.data);

        toast.success(
          response.data.message || "Logout successful! Redirecting..."
        );
        logout();
        router.push("/home"); // Redirect after success
      }
    } catch (error: any) {
      console.error(error);
      // Improved error handling:
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex space-x-2.5 z-40">
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer h-[45px] w-[45px]">
            <AvatarImage
              src={user?.profilePic || "https://github.com/shadcn.png"}
              alt="profile pic"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="">
            <div className="flex gap-2 space-y-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={user?.profilePic || "https://github.com/shadcn.png"}
                  alt="pp"
                />
              </Avatar>
              <div>
                <span className="flex space-x-2 items-center">
                  <h4 className="font-medium">{user?.name}</h4>
                  <p className="text-sm text-indigo-500 italic">
                    @{user?.username}
                  </p>
                </span>
                <p className="text-sm text-muted-foreground">
                  {user?.bio ||
                    "NSEC CSE 2021 | Full Stack Developer | Open Source Enthusiast | Tech Blogger"}
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <Ranking />
            <Separator className="my-4" />
            <div className="flex  my-2 text-gray-600 space-x-6">
              <div className="flex w-fit items-center gap-4">
                <User2 />
                <Link href={"/profile"}>
                  <Button variant={"outline"} className="cursor-pointer">
                    Profile
                  </Button>
                </Link>
              </div>

              <div className="flex w-fit items-center gap-4">
                <LogOut />
                <Button
                  onClick={logoutHandler}
                  variant="destructive"
                  className="cursor-pointer"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AvatarBox;
