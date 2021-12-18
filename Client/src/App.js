import React , {useEffect, useState} from 'react';
import {Container, AppBar, Typography,Grow,Grid} from '@material-ui/core';

import {getPosts} from './actions/posts';
import {useDispatch} from 'react-redux';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';

//in grid we justify the length and breadth on different devices
//which are either extra small small and all other sizes
//we have different components under it as Posts and Form
//we also import styles from ./styles and create an object of it
//we access its functions in individual components
const App =() => {
    const design = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId , dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={design.appBar} position="static" color="inherit">
                <Typography className={design.heading} variant="h2" align="center">Souvenir</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={design.mainContainer} container justify ="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>    
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;