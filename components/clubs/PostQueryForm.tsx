"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  clubId: string;
  onPostQuery: (question: string) => void;
}

const PostQueryForm: React.FC<Props> = ({ clubId, onPostQuery }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;
    onPostQuery(question);
    setQuestion("");
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md ">
      <Textarea
        placeholder="Type your question here..."
        className="mb-4 min-h-[100px]"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700"
      >
        Submit Query
      </Button>
    </div>
  );
};

export default PostQueryForm;
