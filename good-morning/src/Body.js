import React from "react";
import Weather from "./Weather";
import Tweet from "./Tweet";
import Chuck from "./Chuck";
import News from "./News";

const Body = () => {
  return (
    <div>
      <Weather />
      {/* <Tweet /> */}
      <News />
      <Chuck />
    </div>
  );
};

export default Body;
