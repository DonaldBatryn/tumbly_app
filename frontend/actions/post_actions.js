import * as PostAPIUtil from '../utils/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS';


const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = id => ({
    type: REMOVE_POST,
    postId: id
})

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS
})

export const fetchPosts = (page) => dispatch => {
    
    return PostAPIUtil.fetchPosts(page).then(posts => dispatch(receivePosts(posts)),
    err => dispatch(receivePostErrors(err.responseJSON)))
    
}

export const fetchPost = (id) => dispatch => (
    PostAPIUtil.fetchPost(id).then(post => dispatch(receivePost(post)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const createImagePost = (formData) => dispatch => (
    PostAPIUtil.createImagePost(formData).then(post => dispatch(receivePost(post)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const updatePost = (post) => dispatch => (
    PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const deletePost = (id) => dispatch => {
    return PostAPIUtil.deletePost(id).then(id => dispatch(removePost(id)),
        err => dispatch(receivePostErrors(err.responseJSON)))
}

export const clearErrors = () => dispatch => (
    dispatch(clearPostErrors())
)