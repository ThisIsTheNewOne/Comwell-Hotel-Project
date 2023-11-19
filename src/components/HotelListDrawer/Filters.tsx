import React from "react";

interface FilterProps {
  selectedFilter: string;
  handleFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, handleFilterChange }) => {
  const filters = ["Alle", "Sjælland", "Fyn", "Jylland"];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button key={filter} onClick={() => handleFilterChange(filter)} className={selectedFilter === filter ? "activeFilter" : ""}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
