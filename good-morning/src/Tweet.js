import React, { useState, useEffect } from "react";

// import axios from "axios";
// import needle from "needle";
// import {
//   APIkey,
//   APIsecret,
//   token,
//   accessToken,
//   accessTokenSecret,
// } from "./apis";

var Twit = require("twit");

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";


const Tweet = () => {
  // const [tweet, setTweet] = useState(null);

  useEffect(() => {}, []);



  const renderTweet = () => {
    return (
      <div>
        <div>Tweet</div>
      </div>
    );
  };
  return (
    <div className="ui card">
      <div>{renderTweet()}</div>
    </div>
  );
};
export default Tweet;
