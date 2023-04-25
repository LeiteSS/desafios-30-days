import React, { useState, useEffect } from "react";


import { Button } from "@mui/material";
import FlipMove from "react-flip-move";

import TweetBox from "../TweetBox";
import Post from "../Post";
import "./styles.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let data = [
      {
        avatar: 'oi',
        displayName: 'Teste',
        verified: true,
        text: 'Testando',
        image: 'test',
        username: '@teste'
      }
    ];

    setPosts(data);
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Twitter Clone Home</h2>
        <Button>Logout</Button>
      </div>

      {/* Tweetbox */}
      <TweetBox />
      {/* Posts */}
      <FlipMove>
        {posts?.map(
          ({ avatar, displayName, verified, text, image, username }, index) => {
            return (
              <Post
                key={index}
                displayName={displayName}
                username={username}
                verified={verified}
                text={text}
                image={image}
                avatar={avatar}
              />
            );
          }
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;