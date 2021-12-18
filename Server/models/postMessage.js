import mongoose from 'mongoose';

//this file is used to create a mongoose model 
//these models are created using schema 
//after creation of this model we can create more routes

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile:String,    //this is the picture that we will post
    //this picture will be converted to a string using react-file-base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

