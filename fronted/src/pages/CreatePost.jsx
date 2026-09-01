import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        "https://complete-backend-465s.onrender.com/create-post",
        formData
      );

      console.log(res.data);
      alert("Post Created");
      navigate("/feed");
      e.target.reset();
      setFileName("");
    } catch (err) {
      console.error(err);

      if (err.response) {
        console.log(err.response.data);
      }

      alert("Error creating post");
    }
  };

  return (
    <main className="create-page">
      <div className="create-orb create-orb-one" />
      <div className="create-orb create-orb-two" />
      <section className="create-card">
        <div className="eyebrow">NEW POST</div>
        <h1>Create something worth sharing.</h1>
        <p className="create-intro">Add a photo and a few words for your community.</p>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="create-form"
        >
          <label className="image-upload">
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            />
            <span className="upload-icon" aria-hidden="true">↑</span>
            <span>
              <strong>{fileName || "Choose an image"}</strong>
              <small>{fileName ? "Ready to upload" : "PNG, JPG, or WEBP"}</small>
            </span>
          </label>

          <label className="field-label" htmlFor="caption">Caption</label>
          <textarea id="caption" name="caption" rows="5" required placeholder="Tell the story behind this photo..." />

          <div className="form-actions">
            <button className="cancel-link" type="button" onClick={() => navigate("/feed")}>Cancel</button>
            <button className="publish-button" type="submit">Publish post <span aria-hidden="true">→</span></button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreatePost;
