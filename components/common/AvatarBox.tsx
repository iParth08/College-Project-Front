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
const AvatarBox = () => {
  const logoutHandler = () => {};

  return (
    <div className="flex space-x-2.5 z-40">
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="">
            <div className="flex gap-2 space-y-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div>
                <h4 className="font-medium">{"Shwet Prakash"}</h4>
                <p className="text-sm text-muted-foreground">
                  {
                    "NSEC CSE 2024 | Full Stack Developer | Open Source Enthusiast | Tech Blogger"
                  }
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <Ranking />
            <Separator className="my-4" />
            <div className="flex  my-2 text-gray-600 space-x-6">
              <div className="flex w-fit items-center gap-4 cursor-pointer">
                <User2 />
                <Link href={"/profile"}>
                  <Button variant={"outline"}>Profile</Button>
                </Link>
              </div>

              <div className="flex w-fit items-center gap-4 cursor-pointer">
                <LogOut />
                <Button onClick={logoutHandler} variant="destructive">
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
