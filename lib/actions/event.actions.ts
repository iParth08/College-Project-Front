// This file contains the actions for the event page

const deleteEvent = async ({
  eventId,
  path,
}: {
  eventId: string;
  path: string;
}) => {
  const res = await fetch(`/api/event/${eventId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete event");
  }
  const data = await res.json();
  if (data.success) {
    window.location.href = path;
  } else {
    throw new Error("Failed to delete event");
  }
};

const createEvent = async ({}) => {};
const updateEvent = async ({}) => {};

export { createEvent, updateEvent, deleteEvent };
