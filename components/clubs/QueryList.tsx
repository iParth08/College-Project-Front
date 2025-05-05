"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Answer {
  id: string;
  text: string;
  answeredBy: string;
}

interface Query {
  id: string;
  question: string;
  answers: Answer[];
}

interface Props {
  clubId: string;
  userRole: string;
  initialQueries: Query[];
  onAddAnswer: (queryId: string, answerText: string) => void;
}

const QueryList: React.FC<Props> = ({
  initialQueries,
  userRole,
  onAddAnswer,
}) => {
  const [answerInput, setAnswerInput] = useState<{ [key: string]: string }>({});

  const handleAnswerSubmit = (queryId: string) => {
    const answer = answerInput[queryId];
    if (!answer.trim()) return;
    onAddAnswer(queryId, answer);
    setAnswerInput({ ...answerInput, [queryId]: "" });
  };

  return (
    <div className="space-y-6">
      {initialQueries.map((query) => (
        <div key={query.id} className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800">
            {query.question}
          </h4>

          <div className="mt-4 space-y-2">
            {query.answers.map((ans) => (
              <div key={ans.id} className="bg-gray-50 p-3 rounded-md">
                <Badge
                  className={`mb-1 ${
                    ans.answeredBy === "Core Member"
                      ? "bg-indigo-600"
                      : "bg-green-600"
                  } text-white`}
                >
                  {ans.answeredBy}
                </Badge>
                <p className="text-gray-700">{ans.text}</p>
              </div>
            ))}
          </div>

          {userRole !== "Guest" && (
            <div className="mt-4">
              <Textarea
                value={answerInput[query.id] || ""}
                onChange={(e) =>
                  setAnswerInput((prev) => ({
                    ...prev,
                    [query.id]: e.target.value,
                  }))
                }
                placeholder="Write your answer..."
                className="mb-2"
              />
              <Button onClick={() => handleAnswerSubmit(query.id)}>
                Post Answer
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QueryList;
