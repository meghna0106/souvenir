import React, {useState , useEffect} from 'react';
import  {TextField , Button , Typography , Paper} from '@material-ui/core';
import Filebase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import useStyles from './styles.js';

import { createPost , updatePost} from '../../actions/posts';
import { useSelector } from 'react-redux';

//we use ...object_name to unwrap that object
//we create a postdata object as state and have various fields in it
//Here we have to get the current id of the post here so we can edit
//memory using form itself 
const Form = ({currentId , setCurrentId}) => {
    const [postData, setPostData] = useState({creator: '' , title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const design = useStyles();
    const dispatch = useDispatch();

    useEffect   (() => {
        if(post) setPostData (post);
    },[post]) 

    const handleSubmit =(e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
        }
        else {
        dispatch(createPost(postData));
        setPostData({creator: '' , title: '', message: '', tags: '', selectedFile: ''});
        }
        clear();
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth'
        });
    }
    const clear =() => {
        setCurrentId(null);
        setPostData({creator: '' , title: '', message: '', tags: '', selectedFile: ''});
        

    }
    return (
        <Paper className={design.paper}>
            <form autoComplete="off" noValidate className={`${design.root} ${design.form}`} onSubmit={handleSubmit}>
                <Typography className={design.title} variant ="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData,creator : e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData,title : e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData,message : e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData,tags : e.target.value.split(',')})}/>
                <div className={design.fileInput}>
                    <Filebase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={design.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={design.buttonClear} variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;