import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.chucknorris.io/jokes/random";

const Chuck = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setJoke(response.data.value);
    });
  }, []);
  return (
    <div>
      <div>Chuck Norris Joke of the Day!</div>
      <div>{joke}</div>
    </div>
  );
};

export default Chuck;
