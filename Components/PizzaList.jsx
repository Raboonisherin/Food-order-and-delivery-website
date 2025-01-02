import React, { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("default"); // Default sorting
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Extract available categories from pizzaList
  const availableCategories = [
    ...new Set(pizzaList.map((pizza) => pizza.category)),
    "Cheese",
    "Vegetarian", // Additional filter option
    "Spicy", // Additional filter option
    // Add more filter options as needed
  ];

  // Sort options
  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "priceAsc", label: "Price Low to High" },
    { value: "priceDesc", label: "Price High to Low" },
  ];

  // Handle sorting change
  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (category) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
  };

  // Filter pizza list based on search query and selected filters
  const filteredPizzaList = pizzaList
    .filter((pizza) => {
      const titleMatch = pizza.title.toLowerCase().includes(searchQuery.toLowerCase());
      const filterMatch = selectedFilters.length === 0 || selectedFilters.includes(pizza.category);
      return titleMatch && filterMatch;
    })
    .sort((a, b) => {
      if (selectedSortOption === "priceAsc") {
        return a.prices[0] - b.prices[0];
      } else if (selectedSortOption === "priceDesc") {
        return b.prices[0] - a.prices[0];
      } else {
        return 0; // Default sorting (no sorting)
      }
    });

  return (
    <div id="pizzaList" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.filters}>
            <span>Sort by:</span>
            <select value={selectedSortOption} onChange={handleSortChange} className={styles.sortSelect}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span>Filter by Category:</span>
            {availableCategories.map((category) => {
              // Check if the category is undefined or empty or contains only whitespace
              if (!category || category.trim() === "") {
                return null; // Skip rendering for undefined or empty categories
              }
              
              return (
                <label key={category} className={styles.filterLabel}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(category)}
                    onChange={() => handleFilterChange(category)}
                  />
                  {category}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <input
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={styles.searchInput}
          />
          <div className={styles.products}>
            {filteredPizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
