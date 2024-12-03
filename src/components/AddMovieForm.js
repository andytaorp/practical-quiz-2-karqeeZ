import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!title.trim()) {
      return;
    }
    onAddMovie(title.trim());
    setTitle("");
  };

  return(// TODO: add a form to add a new movie 
    <form onSubmit={handleSubmit}>
      <input placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button>Add movie</button>
    </form>
  );
}
