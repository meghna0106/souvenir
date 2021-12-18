//this is a file where we declare all the functions of
//the postroutes in routes/posts.js
//if all functions are written at the same place we will
//have unneccessary large files

import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async(req,res) => {
    try {
        const postMessages = await PostMessage.find();
        //await because the function of find takes times
        //and we have to make this async
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message : error.message});
    }
    
}

export const createPost = async(req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    //PostMessage is our model for the post
    
    try{
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error){
        res.status(409).json({message: error.message});

    }
}


export const updatePost = async(req,res) => {
    const {id: _id} = req.params;
    const post = req.body;
    //post sent from frontend

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that id');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id}, {new: true});

    res.json(updatedPost);

}

export const deletePost = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message : 'Post deleted successfully'});
}

export const likePost = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id');
    
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount : post.likeCount + 1} , {new : true});

    res.json(updatedPost);


}

