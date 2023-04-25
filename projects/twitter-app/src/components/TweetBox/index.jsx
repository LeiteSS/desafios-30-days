import React, { useState } from "react";
import axios from "axios";

import { Avatar, Button } from "@mui/material";

import "./styles.css";
import user from '../../assets/user.png';

const TweetBox = ({ addTweet }) => {
  const [tweetMsg, setTweetMsg] = useState('');
  const [tweetImg, setTweetImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addTweet({avatar:  'assets/user.png', displayName: 'Leite, S.S.', verified: true, text: tweetMsg,  image: tweetImg, username: 'themilkstripes'});

    setTweetMsg("");
    setTweetImg("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
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
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;