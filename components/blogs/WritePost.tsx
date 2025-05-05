"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.bubble.css";
import Image from "next/image";
import styles from "@/components/styles/editor.module.css";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic"],
  [{ color: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link"],
  ["code-block", "blockquote"],
];

// Optional: restrict tags to known values
type Tag = "Internship" | "Job" | "Guide" | "Tech Article" | "Story";
const tagOptions: Tag[] = [
  "Internship",
  "Job",
  "Guide",
  "Tech Article",
  "Story",
];

export default function WritePost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const handlePublish = async (): Promise<void> => {
    try {
      const payload = {
        title,
        content,
        tags,
        authorComment: comment,
      };

      const response = await axios.post("/api/blog/create-blog", payload, {
        withCredentials: true,
      });

      console.log("Blog created:", response.data);
      toast.success(
        response.data.message || "Login successful! Redirecting..."
      );
      router.push("/blogs");
    } catch (error: any) {
      console.error(
        "Error publishing blog:",
        error?.response?.data || error.message
      );
      // Optionally show error toast here
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleSaveDraft = (): void => {
    console.log("Saving draft...");
  };

  const handleTagSelection = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value as Tag
    );
    setTags(selectedTags);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setComment(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 space-y-6  space-x-7 md:flex">
      {/* Main */}
      <div className="md:w-3/4">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter your blog title..."
          className="w-full h-[60px] text-4xl font-semibold focus:outline-none border-b border-gray-300 pb-5 placeholder-gray-400 text-primary-100"
        />

        <div className="flex space-x-4 mt-4">
          <button onClick={() => setOpen(!open)} className={styles.addButton}>
            <Image src="/icon/plus.png" alt="plus" width={16} height={16} />
          </button>
          {open && (
            <div className="flex space-x-2">
              <button className={styles.addButton}>
                <Image
                  src="/icon/image.png"
                  alt="image"
                  width={16}
                  height={16}
                />
              </button>
              <button className={styles.addButton}>
                <Image
                  src="/icon/video.png"
                  alt="video"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          )}
        </div>

        <div className={styles.editorWrapper}>
          <ReactQuill
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            modules={{ toolbar: toolbarOptions }}
            theme="bubble"
            className={styles.quillEditor}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:w-1/4 md:mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tags Selection</h3>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => {
              const isSelected = tags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => {
                    setTags((prev) =>
                      isSelected
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    );
                  }}
                  className={`px-3 py-1 rounded-full border text-sm transition ${
                    isSelected
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Writer's Comment/Objective
          </h3>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment..."
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <button
            onClick={handlePublish}
            className="bg-action-100 text-white px-4 py-2 rounded mr-2 mt-2"
          >
            Publish
          </button>
          <button
            onClick={handleSaveDraft}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2"
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
