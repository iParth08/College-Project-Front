import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const FlashPost = () => {
  return (
    <div className="flex">
      {/* color coded : */}
      <div className="flex-2/3">
        <h1>Title of Post</h1>
        <span>Author Signature</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          sapiente repudiandae labore, perferendis ab earum omnis accusantium
          est sequi, ad facilis quis, deleniti voluptatem aspernatur a unde
          perspiciatis nam officiis!
        </p>
      </div>
      <div className="flex-1/3">
        <div>rating</div>
        <div>Eye: 567</div>
        <Link href={"/blogs/1234"}>
          <Button className="">Dive More</Button>
        </Link>
      </div>
    </div>
  );
};

export default FlashPost;
