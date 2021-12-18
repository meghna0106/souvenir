import * as api from '../api';

//Action Creators - function that return actions

export const getPosts =() => async (dispatch) => {

    try{
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload : data});
    }catch (error) {
        console.log(error.message);
    }
}

export const createPost =(post) => async(dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE' , payload:data});

    }catch(error){
        console.log(error);

    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
       const {data} =  await api.updatedPost(id, post);
        dispatch ( {type : 'UPDATE' , payload : data});
    } catch (error) {
        console.log(error);
    }
};

export const deletePost =(id) =>async dispatch => {
    try{
        await api.deletePost(id);

        dispatch({type : 'DELETE', payload : id});
    }catch (error){
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try{
        const {data} = await api.likePost(id);

        dispatch({type: 'LIKE' , payload : data});
    }catch(error){
        console.log(error);
    }
};
//this is use of redux thunk and redux where we can dispatch an action
//here, instead of returning an action we dispatch an action
//here we try to make api calls and fetch the posts from the backend