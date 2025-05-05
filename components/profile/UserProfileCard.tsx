import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Pencil, Upload } from "lucide-react";
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

interface UserProfile {
  name: string;
  email: string;
  profile: {
    picture?: string;
    studentId?: string;
    bio?: string;
    interests: string[];
    resumeUrl?: string;
    idcardUrl?: string;
  };
}

interface UserProfileCardProps {
  user: UserProfile;
  //   onUpdate: (updated: UserProfile) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  //   onUpdate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(user);

  const handleChange = (field: string, value: any) => {
    if (field.startsWith("profile.")) {
      const key = field.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleFileUpload = (
    field: keyof UserProfile["profile"],
    file: File | null
  ) => {
    if (!file) return;
    const fileURL = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: fileURL,
      },
    }));
  };

  const handleSubmit = () => {
    // onUpdate(formData);
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
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user?.profile.picture || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />

          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
            <p>
              <strong>Student ID:</strong> {user?.profile.studentId || "N/A"}
            </p>
            <p>{user.profile.bio || "No bio available."}</p>

            <div className="flex flex-wrap gap-2">
              {user.profile.interests.map((interest, idx) => (
                <Badge key={idx} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mt-3 flex-wrap">
              {user.profile.resumeUrl && (
                <a
                  href={user.profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Download size={16} /> Resume
                  </Button>
                </a>
              )}
              {user.profile.idcardUrl && (
                <a
                  href={user.profile.idcardUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <ExternalLink size={16} /> ID Card
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div>
          <Ranking />
        </div>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={formData.profile.studentId || ""}
                onChange={(e) =>
                  handleChange("profile.studentId", e.target.value)
                }
              />
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.profile.bio || ""}
                onChange={(e) => handleChange("profile.bio", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="interests">Interests (comma separated)</Label>
              <Input
                id="interests"
                value={formData.profile.interests.join(", ")}
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
              <div>
                <Label>Profile Picture</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload("picture", e.target.files?.[0] || null)
                  }
                />
              </div>
              <div>
                <Label>Resume</Label>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    handleFileUpload("resumeUrl", e.target.files?.[0] || null)
                  }
                />
              </div>
              <div>
                <Label>ID Card</Label>
                <Input
                  type="file"
                  accept=".pdf, image/*"
                  onChange={(e) =>
                    handleFileUpload("idcardUrl", e.target.files?.[0] || null)
                  }
                />
              </div>
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfileCard;
