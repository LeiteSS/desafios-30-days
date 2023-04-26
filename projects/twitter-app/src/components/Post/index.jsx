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
import TweetBoxUp from "../TweetBoxUp";
import Modal from './Modal';

const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar }, ref) => {
    const [liked, setLiked] = useState(false);
    const [show, setShow] = useState(false);
    const url = `http://localhost:3000/posts/update/`;
    
    const deletePost = async () => {
      try {

        await axios.delete(`http://localhost:3000/posts/${id}`);
      } catch (error) {
        console.log(error);
      }

      window.location.reload();
    }

    const upTweet = async (posts) => {
      try {
        console.log(posts);
        await axios.post(url, posts, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.log(error);
      }

      window.location.reload();
    }

    const hideModal = () => {
      setShow(false);
    }

    const showModal = () => {
      setShow(true);
    }

    return (
      <>
        {(show === true) ?  
        <Modal show={showModal} handleClose={hideModal}>
          <TweetBoxUp upTweet={upTweet} id={id} msg={text} img={image}/>
        </Modal> 
      :
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
            <ChatBubbleOutlineIcon onClick={showModal} fontSize="small" />
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
            <PublishIcon onClick={deletePost} fontSize="small" />

          </div>
        </div>
      </div>}
      </>
    );
  }
);

{/* */}

export default Post;
