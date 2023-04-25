const express = require("express");
const postRoutes = express.Router();
const fs = require('fs');

const dataPath = './src/data/posts.json';

const savePost = (data) => {
  const stringfyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringfyData);
}

const getPosts = () => {
  const jsonData = fs.readFileSync(dataPath);
  
  return JSON.parse(jsonData);
}

// GET BY ID
postRoutes.get('/posts/:id', (req, res) => {
  let existPosts = getPosts();
  res.send(existPosts);
  fs.readFileSync(dataPath, 'utf8', (err, data) => {
    const postId = req.params.id;  
    res.send(existPosts[postId]);

    return JSON.parse(existPosts[postId]);
  });
});

// CREATE - create a new post in json file
postRoutes.post('/posts/', (req, res) => {
  let existPosts = getPosts();

  //const newPostId = Math.floor(1000 + Math.random() * 9000);
  req.body.id = existPosts.length + 1;
  existPosts.push(req.body);
  console.log(req.body);
  
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
  let existPosts = getPosts();
 
  const postId = req.params['id'];
  console.log(postId);  
  let index = existPosts.indexOf(postId);
  console.log(index);
  existPosts.splice(index, 1);
  savePost(existPosts);

  res.send(`posts with id ${postId} has been deleted`);
})

module.exports = postRoutes;