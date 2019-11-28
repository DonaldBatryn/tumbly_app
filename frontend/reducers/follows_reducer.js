import {
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions'


const followsReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState;
    switch (action.type) {
        case RECEIVE_FOLLOW:

            return Object.assign({}, state, action.follow)
        case REMOVE_FOLLOW:

            newState = Object.assign({}, state)
            delete newState[action.followId]
            return newState
        default:
            return state;
    }
}

export default followsReducer;