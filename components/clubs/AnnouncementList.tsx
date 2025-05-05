import React from "react";

interface Announcement {
  announcer: string;
  message: string;
  date: string;
}

interface AnnouncementListProps {
  announcements: Announcement[];
}

const badgeColors: Record<string, string> = {
  President: "bg-indigo-100 text-indigo-700",
  "Club Ambassador": "bg-green-100 text-green-700",
  default: "bg-gray-100 text-gray-700",
};

const AnnouncementList: React.FC<AnnouncementListProps> = ({
  announcements,
}) => {
  return (
    <div className="max-w-full mx-auto mt-10 px-6">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
        📢 Announcements
      </h3>
      <ul className="space-y-4">
        {announcements.map((item, index) => {
          const badgeStyle = badgeColors[item.announcer] || badgeColors.default;

          return (
            <li
              key={index}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyle}`}
                >
                  {item.announcer}
                </span>
                <span className="text-gray-400 text-sm">
                  Posted on {item.date}
                </span>
              </div>
              <p className="text-gray-800 font-medium text-base">
                {item.message}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AnnouncementList;
