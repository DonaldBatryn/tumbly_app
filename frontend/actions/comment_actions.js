import * as CommentAPIUtil from '../utils/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    commentId: id
})

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const createComment = (postId, comment) => dispatch => {
    // debugger
    return CommentAPIUtil.createComment(postId, comment).then(comment => dispatch(receiveComment(comment)),
        err => dispatch(receiveCommentErrors(err.responseJSON)))
}

export const deleteComment = (id) => dispatch => (
    CommentAPIUtil.deleteComment(id).then(id => dispatch(removeComment(id)),
        err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const clearErrors = () => dispatch => (
    dispatch(clearCommentErrors())
)