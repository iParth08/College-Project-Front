"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChevronDown } from "lucide-react";

interface ActionBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onFilterSelect?: (filter: string) => void;
  filters?: string[];
  showFilter?: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({
  placeholder = "Search...",
  onSearch,
  onFilterSelect,
  filters = [],
  showFilter = true,
}) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilterClick = (filter: string) => {
    if (onFilterSelect) onFilterSelect(filter);
    setShowDropdown(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4  dark:bg-zinc-900 px-4 py-3 ">
      {/* Search Box */}
      <div className="flex w-full md:w-auto items-center gap-2">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white dark:bg-zinc-800 dark:text-white md:w-[560px]"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Filter Section */}
      {showFilter && filters.length > 0 && (
        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-1"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            Filter <ChevronDown size={16} />
          </Button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 z-10 bg-white dark:bg-zinc-800 shadow-lg border border-gray-200 dark:border-zinc-700 rounded-md w-40 overflow-hidden">
              {filters.map((filter, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm"
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ActionBar;
