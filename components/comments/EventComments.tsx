"use client";

import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { dummyEventComments } from "@/lib/dummy-db/comments";

interface EventComment {
  id: string;
  eventId: string;
  parentId?: string;
  author: {
    name: string;
    image?: string;
  };
  text: string;
  votes: number;
  replies?: EventComment[];
}

export default function EventCommentPanel({
  eventId,
  user,
}: {
  eventId: string;
  user?: { name: string; image?: string };
}) {
  const [comments, setComments] = useState<EventComment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    // Replace with actual API call
    // setComments(dummyEventComments.filter((c) => c.eventId === eventId));
    setComments(dummyEventComments);
  }, [eventId]);

  const addComment = () => {
    if (!newComment.trim()) return;
    const newEntry: EventComment = {
      id: Date.now().toString(),
      eventId,
      author: user!,
      text: newComment,
      votes: 0,
      replies: [],
    };
    setComments((prev) => [newEntry, ...prev]);
    setNewComment("");
  };

  const addReply = (parentId: string) => {
    if (!replyText.trim()) return;
    const reply: EventComment = {
      id: Date.now().toString(),
      eventId,
      parentId,
      author: user!,
      text: replyText,
      votes: 0,
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: comment.replies ? [reply, ...comment.replies] : [reply],
            }
          : comment
      )
    );

    setReplyText("");
    setReplyingTo(null);
  };

  const handleVote = (id: string, delta: number) => {
    const updateVotes = (items: EventComment[]): EventComment[] =>
      items.map((c) =>
        c.id === id
          ? { ...c, votes: c.votes + delta }
          : { ...c, replies: c.replies ? updateVotes(c.replies) : [] }
      );
    setComments(updateVotes(comments));
  };

  return (
    <section className="mt-12 w-full bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Event Comments</h3>

      {user ? (
        <div className="mb-6">
          <Textarea
            placeholder="Share your thoughts about the event..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />
          <Button onClick={addComment}>Post Comment</Button>
        </div>
      ) : (
        <p className="text-muted-foreground">
          Please login to comment or reply.
        </p>
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-muted/20 p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.author.image} />
                <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{comment.author.name}</p>
                <p className="text-gray-700 mt-1">{comment.text}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <button
                    onClick={() => handleVote(comment.id, 1)}
                    className="hover:text-green-600 transition"
                  >
                    <ThumbsUp size={16} />
                  </button>
                  <span>{comment.votes}</span>
                  <button
                    onClick={() => handleVote(comment.id, -1)}
                    className="hover:text-red-600 transition"
                  >
                    <ThumbsDown size={16} />
                  </button>
                  {user && (
                    <button
                      className="hover:text-blue-500 flex items-center gap-1"
                      onClick={() =>
                        setReplyingTo((id) =>
                          id === comment.id ? null : comment.id
                        )
                      }
                    >
                      <MessageCircle size={14} />
                      Reply
                    </button>
                  )}
                </div>

                {replyingTo === comment.id && (
                  <div className="mt-3">
                    <Textarea
                      placeholder="Write a reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="mb-2"
                    />
                    <Button size="sm" onClick={() => addReply(comment.id)}>
                      Post Reply
                    </Button>
                  </div>
                )}

                {(comment.replies ?? []).length > 0 && (
                  <div className="pl-6 mt-4 border-l border-muted space-y-4">
                    {(comment.replies ?? []).map((reply) => (
                      <div key={reply.id} className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={reply.author.image} />
                          <AvatarFallback>
                            {reply.author.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{reply.author.name}</p>
                          <p className="text-gray-700 mt-1">{reply.text}</p>
                          <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                            <button
                              onClick={() => handleVote(reply.id, 1)}
                              className="hover:text-green-600 transition"
                            >
                              <ThumbsUp size={14} />
                            </button>
                            <span>{reply.votes}</span>
                            <button
                              onClick={() => handleVote(reply.id, -1)}
                              className="hover:text-red-600 transition"
                            >
                              <ThumbsDown size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
