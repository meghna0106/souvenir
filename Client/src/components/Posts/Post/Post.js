import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button , Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({post , setCurrentId}) => {
    const design = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={design.card}>
            <CardMedia className={design.media} image={post.selectedFile} title={post.title}/>
            <div className ={design.overlay}>
                <Typography className={design.text} variant="h6">{post.creator}</Typography>
                <Typography className={design.text}variant="body2"></Typography>
            </div>
            <div className={design.overlay2}>
                <Button style={{color: 'white'}} size="small" 
                onClick={()=> setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize ="default"/>
                </Button>
            </div>
            <div className={design.details}>
                <Typography className={design.content} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <div>
                <Typography className={design.title}>{post.title}</Typography>
            </div>
            <CardContent> 
                <Typography className={design.content} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={design.cardActions}>
                <Button style={{color : '#67349C'}} size="small" onClick={()=> dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon style={{color :'#67349C'}} fontsize="small"/>
                    {post.likeCount} Likes
                </Button>
                <Button style={{color : '#78194F'}} size="small" onClick={()=> dispatch(deletePost(post._id))}>
                    <DeleteIcon style={{color : '#78194F'}} fontsize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>    
        );
}

export default Post;
