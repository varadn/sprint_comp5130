import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  }

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="question-button" title="Help">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="question-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
