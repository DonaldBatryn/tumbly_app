import {
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/like_actions'


const likesReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState;
    switch (action.type) {
        case RECEIVE_LIKE:

            return Object.assign({}, state, action.comment)
        case REMOVE_LIKE:

            newState = Object.assign({}, state)
            delete newState[action.commentId]
            return newState
        default:
            return state;
    }
}

export default likesReducer;