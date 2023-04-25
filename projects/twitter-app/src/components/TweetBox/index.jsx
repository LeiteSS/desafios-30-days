import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";

import "./styles.css";
import user from '../../assets/user.png';

const TweetBox = () => {
  const [tweetMsg, setTweetMsg] = useState('');
  const [tweetImg, setTweetImg] = useState('');

  const sendTweet = e => {
    e.preventDefault();
   
    setTweetMsg("");
    setTweetImg("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user} alt="user" />
          <input
            type="text"
            value={tweetMsg}
            onChange={e => setTweetMsg(e.target.value)}
            placeholder="What's Happening...?"
          />
        </div>
        <input
          type="text"
          value={tweetImg}
          onChange={e => setTweetImg(e.target.value)}
          placeholder="Optional: Enter Image Url"
          className="tweetBox__inputImage"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;