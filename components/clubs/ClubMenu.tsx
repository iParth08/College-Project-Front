"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Home, Calendar, FileText, Users, HelpCircle } from "lucide-react";

const ClubMenu = () => {
  const pathname = usePathname();
  const params = useParams();
  const id = params?.id as string;

  const navItems = [
    { name: "Home", href: `/clubs/${id}`, icon: Home },
    { name: "Events", href: `/clubs/${id}/events`, icon: Calendar },
    { name: "Blogs", href: `/clubs/${id}/blogs`, icon: FileText },
    { name: "Members", href: `/clubs/${id}/members`, icon: Users },
    { name: "Queries", href: `/clubs/${id}/queries`, icon: HelpCircle },
  ];

  return (
    <div className="fixed left-0 top-[30%] min-h-fit  bg-gray-900 text-white flex flex-col py-4 transition-all duration-300 rounded-br-2xl rounded-tr-2xl z-100">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative flex items-center gap-4 px-4 md:py-5 py-3 hover:bg-gray-800 transition group ${
              isActive ? "bg-white text-indigo-400" : ""
            }`}
          >
            <span
              data-tooltip={item.name}
              className="flex items-center gap-2 relative tooltip"
            >
              <Icon className="md:w-8 md:h-8 w-6 h-6 shrink-0" />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ClubMenu;
