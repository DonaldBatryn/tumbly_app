import {
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST
} from '../actions/post_actions'


const postsReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState
    switch (action.type) {
        case RECEIVE_POSTS:
        
            return Object.assign({}, state, action.posts)
        case RECEIVE_POST:
            
            return Object.assign({}, state, {[action.post.id]: action.post})
        case REMOVE_POST:
            newState = Object.assign({}, state)
            delete newState[action.postId]
            return newState;
        default:
            return state;
    }
}

export default postsReducer;