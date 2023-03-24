const express = require('express');
const {
  setPosts,
  getPosts,
  editPosts,
  deletePosts,
  likePost,
  dislikePost,
} = require('../../controllers/post.controllers');
const router = express.Router();

router.get('/', getPosts);
router.post('/', setPosts);
router.put('/:id', editPosts);
router.delete('/:id', deletePosts);
router.patch('/like-post/:id', likePost);
router.patch('/dislike-post/:id', dislikePost);

module.exports = router;
