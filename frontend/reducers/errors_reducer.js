import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import postErrorsReducer from './post_errors_reducer'
import commentErrorsReducer from './comment_errors_reducer'


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    posts: postErrorsReducer,
    comments: commentErrorsReducer
    
})

export default errorsReducer;