import React, { forwardRef, useState } from "react";

import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';

import axios from "axios";

import "./styles.css";

const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar }, ref) => {
    const [liked, setLiked] = useState(false);
  

    const deletePost =  (id) => {
      try {
         axios.delete(`http://localhost:3000/posts/${id}`);
      } catch (error) {
        console.log(error);
      }

      window.location.reload();
    }

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} alt="user" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDesc">
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt="post_img" />}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            {liked ? (
              <FavoriteIcon
                onClick={() => setLiked(!liked)}
                fontSize="small"
                className="post__liked"
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setLiked(!liked)}
                fontSize="small"
              />
            )}
            <PublishIcon onClick={() => deletePost(id)} fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
