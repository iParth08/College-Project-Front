"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  LoaderCircle,
  Pencil,
  Upload,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Ranking from "../common/Ranking";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { toast } from "sonner";

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  username: string;
  isVerified: boolean;
  profile: {
    picture?: string;
    bio?: string;
    studentId?: string;
    interests: string[];
    idcardUrl?: string;
    idcardOriginalName?: string;
    resumeUrl?: string;
    resumeOriginalName?: string;
  };
}

const UserProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<UserProfile | null>();
  const [formData, setFormData] = useState<UserProfile | null>();
  const [picture, setPicture] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [studentIdCard, setStudentIdCard] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const loadProfile = async () => {
    setLoading(true);
    try {
      const profile = await axios.get(`api/user/profileById/${user?.id}`);

      setUserData(profile.data);
      setFormData(profile.data);
    } catch (err) {
      console.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleChange = (field: string, value: any) => {
    if (field.startsWith("profile.")) {
      const key = field.split(".")[1];
      setFormData((prev: any) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev: any) => ({ ...prev, [field]: value }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "picture" | "resume" | "studentIdCard"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === "picture") {
      setPicture(file);
    } else if (type === "resume") {
      setResume(file);
    } else if (type === "studentIdCard") {
      setStudentIdCard(file);
    }
  };

  const handleSubmit = async () => {
    console.log(formData);
    if (!formData) return;

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("studentId", formData.profile.studentId || "");
    payload.append("bio", formData.profile.bio || "");
    payload.append(
      "interests",
      JSON.stringify(formData.profile.interests) || ""
    );

    if (picture) {
      payload.append("picture", picture);
    }

    if (resume) {
      payload.append("resume", resume);
    }

    if (studentIdCard) {
      payload.append("studentIdCard", studentIdCard);
    }

    setLoading(true);
    try {
      const response = await axios.post("api/user/update-profile", payload, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log(response.data);

        toast.success(
          response.data.message || "Login successful! Redirecting..."
        );

        loadProfile();
        setIsOpen(false);
      }
    } catch (err) {
      console.error("Profile update failed", err);
    } finally {
      setLoading(false);
    }

    setIsOpen(false);
  };

  return (
    <>
      <Card className="relative flex flex-col md:flex-row items-center gap-6 p-6 shadow-lg">
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(true)}
        >
          <Pencil size={18} />
          <span className="sr-only">Edit Profile</span>
        </Button>
        <div className="w-full flex justify-between px-10 ">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {loading ? (
              <LoaderCircle />
            ) : (
              <img
                src={userData?.profile.picture || "/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            )}

            {/* Profile Display */}
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-bold">{userData?.name}</h2>
              <p className="text-muted-foreground">{userData?.email}</p>
              <p>
                <strong>Student ID:</strong>{" "}
                {userData?.profile.studentId || "N/A"}
              </p>
              <p>{userData?.profile.bio || "No bio available."}</p>

              <div className="flex flex-wrap gap-2">
                {userData?.profile.interests.map((interest, idx) => (
                  <Badge key={idx} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mt-3 flex-wrap">
                {userData?.profile.resumeUrl && (
                  <Link
                    href={userData.profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <Download size={16} />{" "}
                      {userData?.profile.resumeOriginalName}
                    </Button>
                  </Link>
                )}
                {userData?.profile.idcardUrl && (
                  <Link
                    href={userData?.profile.idcardUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <ExternalLink size={16} />{" "}
                      {userData?.profile.idcardOriginalName}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Ranking />
          </div>
        </div>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData?.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={formData?.profile.studentId || ""}
                onChange={(e) =>
                  handleChange("profile.studentId", e.target.value)
                }
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData?.profile.bio || ""}
                onChange={(e) => handleChange("profile.bio", e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="interests">Interests (comma separated)</Label>
              <Input
                id="interests"
                value={formData?.profile.interests.join(", ")}
                onChange={(e) =>
                  handleChange(
                    "profile.interests",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
              />
            </div>

            {/* File Inputs */}
            <div className="grid gap-4">
              <div className="space-y-3">
                <Label>Profile Picture</Label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "picture")}
                />
              </div>

              {/* //!hidden */}
              <div className="space-y-3 hidden">
                <Label>Resume</Label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, "resume")}
                />
              </div>
              <div className="space-y-3">
                <Label>ID Card</Label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "studentIdCard")}
                />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {loading ? "Saving Changes" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfileCard;
