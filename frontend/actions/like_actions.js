import * as LikeAPIUtil from '../utils/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (id) => ({
    type: REMOVE_LIKE,
    likeId: id
})

export const createLike = (postId, like) => dispatch => {
    // debugger
    return LikeAPIUtil.createLike(postId, like).then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (id) => dispatch => (
    LikeAPIUtil.deleteLike(id).then(id => dispatch(removeLike(id)))
)
