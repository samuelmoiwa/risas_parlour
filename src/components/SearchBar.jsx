import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default category

  const categories = ['All Categories', 'Category 1', 'Category 2', 'Category 3']; // Add your own categories

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
  };

  return (
    <div className="flex mt-3 sm:w-1/2 w-10/12">
      <div className="relative inline-block text-gray-600 w-full">
        <input
          type="text"
          className="h-10 pl-8 pr-3 text-sm bg-white border rounded-full
                    focus:outline-none focus:border-gray-300 w-full"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
          <select
            className="text-sm text-gray-500 bg-white focus:outline-none
                focus:border-gray-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
        className="ml-2 p-y px-4 text-white bg-gray-800 rounded-full
            absolute inset-y-0
            hover:bg-gray-700 focus:outline-none"
        onClick={handleSearch}
        >
          Search
        </button>
      </div>


    </div>
  );
};

export default SearchBar;
