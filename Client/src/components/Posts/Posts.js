import React from 'react';
import Post from './Post/Post.js';
import {Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';
//useselector helps us access the whole global redux store
//we import all styles from useStyles and apply them here
const Posts = ({setCurrentId}) => {
    const design = useStyles();
    const posts= useSelector((state) => state.posts);
    console.log(posts);

    return (
        !posts.length ? <CircularProgress/> : (
                <Grid className={design.container} container alignItems = "stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid> 
        )
    );
}
//if no posts then circular progress else
//we show the posts

export default Posts;