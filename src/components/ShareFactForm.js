import React, { useState } from "react";
import "../style.css";
import supabase from "../supabase";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const isValidUrl = (givenURL) => {
  let url;
  try {
    url = new URL(givenURL);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

const ShareFactForm = (props) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const textLength = text.length;

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const sourceChangeHandler = (event) => {
    setSource(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (text && isValidUrl(source) && category && textLength <= 200) {
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      if (!error) {
        props.setFacts((prev) => [newFact[0], ...prev]);
      } else {
        alert("There was a problem uploading the data.");
      }

      setText("");
      setSource("");
      setCategory("");

      props.setFormIsVisible(false);
    }
  };

  return (
    <form className="fact-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Write down your fact"
        onChange={textChangeHandler}
        value={text}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Paste the link to your source"
        onChange={sourceChangeHandler}
        value={source}
        disabled={isUploading}
      />
      <select
        onChange={categoryChangeHandler}
        value={category}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};
export default ShareFactForm;
