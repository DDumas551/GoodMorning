import React, { useState, useEffect } from "react";
import Title from "./Title";

function App() {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem("goodMorningName")) || ""
  );
  useEffect(() => {
    window.localStorage.setItem("goodMorningName", JSON.stringify(name));
  }, [name]);
  return (
    <div className="app">
      <Title name={name} setName={setName} />
    </div>
  );
}

export default App;
