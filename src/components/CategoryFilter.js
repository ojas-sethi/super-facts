import React, { Fragment } from "react";

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

const CategoryFilter = (props) => {
  return (
    <Fragment>
      <aside>
        <ul>
          <li className="category">
            <button
              className="btn btn-all-categories"
              onClick={() => props.setCurrentCategory("all")}
            >
              All Facts
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.name} className="category">
              <button
                className="btn btn-category"
                onClick={() => props.setCurrentCategory(cat.name)}
                style={{ backgroundColor: cat.color }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </Fragment>
  );
};
export default CategoryFilter;
