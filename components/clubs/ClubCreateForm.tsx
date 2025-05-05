"use client";

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";

const ClubCreateForm = () => {
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const bannerRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl border mt-10 mb-10 space-y-6">
      <h1 className="text-2xl font-bold text-center">Create Your Club</h1>

      {/* Banner & Logo Container */}
      <div className="relative">
        {/* Banner Upload */}
        <div
          className="w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed flex items-center justify-center cursor-pointer overflow-hidden group"
          onClick={() => bannerRef.current?.click()}
        >
          {bannerPreview ? (
            <img
              src={bannerPreview}
              alt="Banner"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-500 flex flex-col items-center">
              <ImagePlus className="w-8 h-8 mb-1" />
              Upload Club Banner
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setBannerPreview)}
            ref={bannerRef}
            className="hidden"
          />
        </div>

        {/* Logo Upload */}
        <div
          className={`
            w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-100 overflow-hidden 
            absolute md:bottom-[-1.5rem] md:left-6
            md:block hidden
            cursor-pointer
          `}
          onClick={() => logoRef.current?.click()}
        >
          {logoPreview ? (
            <img
              src={logoPreview}
              alt="Logo"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-400 flex flex-col items-center justify-center h-full">
              <ImagePlus className="w-6 h-6 mb-1" />
              Upload Logo
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setLogoPreview)}
            ref={logoRef}
            className="hidden"
          />
        </div>
      </div>

      {/* Logo (for small screens) */}
      <div
        className="md:hidden flex justify-center -mt-14"
        onClick={() => logoRef.current?.click()}
      >
        <div className="w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-100 overflow-hidden cursor-pointer">
          {logoPreview ? (
            <img
              src={logoPreview}
              alt="Logo"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="text-gray-400 flex flex-col items-center justify-center h-full">
              <ImagePlus className="w-6 h-6 mb-1" />
              Upload Logo
            </div>
          )}
        </div>
      </div>

      {/* Form Inputs */}
      <form className="space-y-4 mt-6 md:mt-10">
        <Input placeholder="Club Name" required />
        <Textarea placeholder="Club Description" rows={3} required />
        <Textarea
          placeholder="President's Message"
          rows={3}
          className="resize-none"
        />
        <Input placeholder="Tags (comma-separated)" />

        <Button
          type="submit"
          className="w-full hover:bg-indigo-400 cursor-pointer"
        >
          Send Application
        </Button>
      </form>
    </div>
  );
};

export default ClubCreateForm;
