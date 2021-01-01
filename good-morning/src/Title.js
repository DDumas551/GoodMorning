import React, { useState } from "react";

const Title = ({ name, setName }) => {
  const [input, setInput] = useState("");

  const renderForm = () => {
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName(input);
      }}
    >
      <label>Enter your name or username</label>
      <br />
      <input
        placeholder="Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>;
  };

  return (
    <div className="ui header">
      <h1>Good Morning, {name}</h1>
      {!name && { renderForm }}
    </div>
  );
};

export default Title;
