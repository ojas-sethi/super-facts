import React from "react";
import FactFeedItem from "./FactFeedItem";

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

const FactFeed = (props) => {
  if (props.facts.length === 0) {
    return (
      <p className="message">
        There are no facts in this category yet. Change that by adding your own!
      </p>
    );
  }

  return (
    <section>
      <ul className="facts-list">
        {props.facts.map((fact) => (
          <FactFeedItem fact={fact} setFacts={props.setFacts} />
        ))}
      </ul>
      <p>
        There {props.facts.length > 1 ? "are" : "is"} {props.facts.length}{" "}
        {props.facts.length > 1 ? "facts" : "fact"} on Super Facts.
      </p>
    </section>
  );
};
export default FactFeed;
