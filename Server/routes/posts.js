import express from 'express';

import {getPosts , createPost , updatePost , deletePost , likePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost' , likePost);


export default router;

//here req is requests and res is response
//this page will not be accessed by http://localhost:5000
//but it will be accessed by http://localhost:5000/posts
//patch is used to update an existing database member