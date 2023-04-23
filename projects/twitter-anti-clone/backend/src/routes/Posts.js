const express = require("express");
const postRoutes = express.Router();
const fs = require('fs');

const dataPath = '../data/posts.json';

const savePost = (data) => {
  const stringfyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringfyData);
}

const getPosts = () => {
  const jsonData = fs.readFileSync(dataPath);
  
  return JSON.parse(jsonData);
}

// CREATE - create a new post in json file
postRoutes.post('/posts/', (req, res) => {
  let existPosts = getPosts();

  const newPostId = Math.floor(1000 + Math.random() * 9000);

  existPosts[newPostId] = req.body;

  console.log(existPosts);
  savePost(existPosts);
  res.send({ success: true, msg: 'post created successfully' });
});

// READ - get all posts from json file
postRoutes.get('/posts/', (req, res) => {
  const posts = getPosts();

  res.send(posts);
})

// UPDATE - put a new post
postRoutes.put('/posts/:id', (req, res) => {
  let existPosts = getPosts();

  fs.readFileSync(dataPath, 'utf8', (err, data) => {
    const postId = req.params['id'];  
    
    existPosts[postId] = req.body;
    savePost(existPosts);

    res.send(`post with id ${postId} has been updated`);
  }, true);
});

// DELETE - delete a post
postRoutes.delete('/posts/:id', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    let existPosts = getPosts();
    const postId = req.params['id'];
    delete existPosts[postId];

    savePost(existPosts);
    res.send(`posts with id ${postId} has been deleted`);
  }, true);
})

module.exports = postRoutes;