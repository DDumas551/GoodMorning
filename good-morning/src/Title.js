import React, { useState } from "react";

const Title = ({ name, setName }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>Good Morning {name}</div>
      {!name && (
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
        </form>
      )}
    </div>
  );
};

export default Title;
