import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[10vh]" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
