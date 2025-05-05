import React from "react";
import clsx from "clsx";

const Title = ({ styles }: { styles: string }) => {
  return (
    <div
      className={clsx(
        styles,
        "font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-text-glow"
      )}
    >
      Club<span className="text-zinc-800 animate-pulse">Connect</span>
    </div>
  );
};

export default Title;
