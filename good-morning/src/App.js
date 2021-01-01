import React, { useState, useEffect } from "react";
import Title from "./Title";
import Body from "./Body";
import "./App.css";

function App() {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem("goodMorningName")) || ""
  );
  useEffect(() => {
    window.localStorage.setItem("goodMorningName", JSON.stringify(name));
  }, [name]);
  return (
    <div className="app">
      <div style={{ padding: "9px", height: "90%" }}>
        <Title name={name} setName={setName} />
        <Body />
      </div>
    </div>
  );
}

export default App;
