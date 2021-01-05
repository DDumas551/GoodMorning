import React, { useState, useEffect } from "react";
import axios from "axios";

const nyt = "1OUIhJBCcVgyZmXblq4c58EMZ3AgGg47",
  sec = "oHjnGwWJso9YxqCu";

const News = () => {
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    nYT();
  }, []);

  const nYT = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${nyt}`
    );
    console.log(res);
    setResults(res.data.results);
    loopResults(res.data.results);
  };

  const loopResults = (results) => {
    const articles = [];
    for (let i = 0; i < 5; i++) {
      articles.push(results[i]);
    }
    setDisplay(articles);
  };

  const renderArticles = () => {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>NY Times</h1>
        <div className="ui list" style={{ marginTop: "15px" }}>
          {display.map((article, i) => {
            return (
              <div
                key={i}
                className="item"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderBottom:
                    i !== display.length - 1 ? "1px solid grey" : "",
                  marginLeft: "15px",
                  marginRight: "15px",
                  paddingBottom: "15px",
                  paddingTop: i === 0 ? "" : "15px",
                }}
              >
                <div className="content">
                  <h3 className="header">
                    <a style={{ color: "black" }}>{article.title}</a>
                  </h3>
                  <div style={{ margin: "15px" }}>{article.abstract}</div>
                  <div style={{ fontWeight: "bold", color: "grey" }}>
                    {article.byline}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="ui card">
      <div>{renderArticles()}</div>
    </div>
  );
};

export default News;
