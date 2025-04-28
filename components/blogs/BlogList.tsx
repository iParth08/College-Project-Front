import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const BlogList = () => {
  return (
    <div className="w-full h-[260px] bg-slate-200">
      <div>
        <p>#tags #intern</p>
        <h2>title of Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aut
          eius non at blanditiis eveniet quo, eaque, alias autem quidem sequi
          repellat? Beatae recusandae, quasi debitis libero deleniti illo
          numquam?
        </p>
      </div>

      <div>
        {/* stats and action */}
        <span>eye. 12</span>
        <Link href={"/blogs/123"}>
          <Button>Read</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
