import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions'


const commentsReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState;
    switch (action.type) {
        case RECEIVE_COMMENT:
           
            return Object.assign({}, state, action.comment)
        case REMOVE_COMMENT:
      
            newState = Object.assign({}, state)
            delete newState[action.commentId]
            return newState
        default:
            return state;
    }
}

export default commentsReducer;