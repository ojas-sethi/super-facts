import "./style.css";
import Header from "./components/Header";
import React, { Fragment, useState, useEffect } from "react";
import CategoryFilter from "./components/CategoryFilter";
import ShareFactForm from "./components/ShareFactForm";
import FactFeed from "./components/FactFeed";
import supabase from "./supabase";
import Loader from "./components/Loader";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory);
      }

      const { data: facts, error } = await query.order("created_at", {
        ascending: false,
      });

      if (error) {
        alert("There was an error getting the data. Please try again.");
      } else {
        setFacts(facts);
      }
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  const shareFormHandler = () => {
    setFormIsVisible((prev) => !prev);
  };

  const title = "SUPER FACTS";

  return (
    <Fragment>
      <Header
        title={title}
        buttonTitle={formIsVisible ? "Close" : "Post Your Fact"}
        onShareClick={shareFormHandler}
      />

      {formIsVisible ? (
        <ShareFactForm
          setFacts={setFacts}
          setFormIsVisible={setFormIsVisible}
        />
      ) : null}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactFeed facts={facts} setFacts={setFacts} />
        )}
      </main>
    </Fragment>
  );
}

export default App;
