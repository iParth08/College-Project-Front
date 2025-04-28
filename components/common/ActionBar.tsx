import React from "react";
import { Button } from "../ui/button";

const ActionBar = () => {
  return (
    <div className="w-full h-[60px] bg-slate-300 flex justify-between items-center">
      <div>
        <input
          type="text"
          className="w-[320px] h-[40px] bg-zinc-800 text-white"
        />
        <Button>Search</Button>
      </div>

      <div>filter list</div>
    </div>
  );
};

export default ActionBar;
