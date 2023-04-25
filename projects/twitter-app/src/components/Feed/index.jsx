import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Button } from "@mui/material";
import FlipMove from "react-flip-move";

import TweetBox from "../TweetBox";
import Post from "../Post";
import "./styles.css";

const Feed = () => {
  const [posts, setPosts] = useState();


  const url = "http://localhost:3000/posts";
  const deleteUrl = "http://localhost:3000/posts/delete";

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
     
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getData();
  }, []);

  const addTweet = async (posts) => {
    try {
     
      await axios.post(url, posts, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.log(error);
    }
    
    getData();
  }

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Twitter Clone Home</h2>
        <Button>Logout</Button>
      </div>

      {/* Tweetbox */}
      <TweetBox addTweet={addTweet} />
      {/* Posts */}
      <FlipMove>
        {posts?.map(
          (user) => {
            return (
              <Post
                key={user.id}
                id={user.id}
                displayName={user.displayName}
                username={user.username}
                verified={user.verified}
                text={user.text}
                image={user.image}
                avatar={user.avatar}
              />
            );
          }
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;