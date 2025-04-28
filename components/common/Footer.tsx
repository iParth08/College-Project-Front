import React from "react";

const Footer = () => {
  return (
    <div className="max-w-full h-[10vh] bg-zinc-950 text-white flex justify-center">
      <div className="w-[80%] flex">
        <section className="flex-1/3">Logo and Name, Navlinks</section>
        <section className="flex-1/3">Recent Events</section>
        <section className="flex-1/3">Recent Blogs</section>
      </div>
    </div>
  );
};

export default Footer;
