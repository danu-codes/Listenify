import React, { useState } from "react";
import "./Explore.css";

export const Explore = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const categories = [
    "Horror",
    "Romance",
    "Sci-Fi",
    "Motivation",
    "Kids",
    "Podcasts"
  ];

  return (
    <div className="explore-container">

      {/* TITLE */}
      <h1 className="explore-title">
        Discover Stories 🔍
      </h1>

      {/* SEARCH SECTION */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Find any story instantly..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>🔍</button>
      </div>

      {/* FILTERS */}
      <div className="filter-box">

        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("popular")}>Popular</button>
        <button onClick={() => setFilter("newest")}>Newest</button>
        <button onClick={() => setFilter("duration")}>Duration</button>

      </div>

      {/* CATEGORY GRID */}
      <h2 className="section-title">Browse Categories</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            {cat}
          </div>
        ))}
      </div>

    </div>
  );
};
