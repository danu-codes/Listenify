import React, { useState } from "react";
import "./Explore.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { stories } from "../../data/stories";
import { useAudio } from "../../context/AudioContext";

export const Explore = () => {
  const { playAudio } = useAudio();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filters = ["all", "popular", "newest", "duration"];

  const categories = [
    "Horror",
    "Romance",
    "Sci-Fi",
    "Motivation",
    "Kids",
    "Podcasts"
  ];

  // ================= HANDLERS =================
  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setFilter("all"); // reset sorting
  };

  const handleFilter = (type) => {
    setFilter(type);
    setSelectedCategory("all"); // reset category
  };

  // ================= FILTER PIPELINE =================
  let filteredStories = stories
  .filter((story) => {
    const q = search.toLowerCase().trim();

    return (
      story.title.toLowerCase().includes(q) ||
      story.author.toLowerCase().includes(q) ||
      story.category.toLowerCase().includes(q)
    );
  })
  .filter((story) =>
    selectedCategory === "all"
      ? true
      : story.category === selectedCategory
  );

  // ================= SORTING =================
  if (filter === "popular") {
    filteredStories = [...filteredStories].sort(
      (a, b) => b.popularity - a.popularity
    );
  }

  if (filter === "newest") {
    filteredStories = [...filteredStories].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (filter === "duration") {
    filteredStories = [...filteredStories].sort(
      (a, b) => a.duration - b.duration
    );
  }

  return (
    <>
      <Navbar />

      <div className="explore-container">

        {/* TITLE */}
        <h1 className="explore-title">
          Discover Stories 🔍
        </h1>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Find any story instantly..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>

        {/* FILTER BUTTONS */}
        <div className="filter-box">
          {filters.map((type) => (
            <button
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => handleFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* CATEGORY SECTION */}
        <h2 className="section-title">Browse Categories</h2>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`category-card ${selectedCategory === cat ? "active" : ""
                }`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* STORIES */}
        <h2 className="section-title">Stories</h2>

        <div className="story-grid">
          {filteredStories.length === 0 ? (
            <p style={{ color: "#94A3B8" }}>No stories found...</p>
          ) : (
            filteredStories.map((story) => (
              <div
                key={story.id}
                className="story-card"
                onClick={() => playAudio(story)}
              >
                {/* IMAGE */}
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                  <div className="play-btn">▶</div>
                </div>

                {/* INFO */}
                <div className="story-info">
                  <h3>{story.title}</h3>
                  <p>{story.author}</p>
                  <p>{story.category}</p>
                  <small>{story.duration} min</small>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
};