import React, { useState } from "react";
import './Upload.css';


export const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    audio: null,
    thumbnail: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      audio: e.target.files[0]
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      thumbnail: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UPLOAD DATA:", form);
    alert("Story ready to upload (backend later)");
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">🎤 Upload Your Story</h1>
      <form className="upload-form" onSubmit={handleSubmit}>

        {/* TITLE */}
        <input
          type="text"
          name="title"
          placeholder="Story Title"
          onChange={handleChange}
          required
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Write story description..."
          onChange={handleChange}
          required
        />

        {/* CATEGORY */}
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="motivation">Motivation</option>
          <option value="kids">Kids</option>
          <option value="podcast">Podcast</option>
        </select>

        {/* AUDIO UPLOAD */}
        <label>Upload Audio File</label>
        <input type="file" accept="audio/*" onChange={handleFile} />

        {/* THUMBNAIL */}
        <label>Upload Thumbnail</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        {/* SUBMIT */}
        <button type="submit">Upload Story</button>

      </form>
    </div>
  )
}
