import * as FollowAPIUtil from '../utils/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
})

const removeFollow = (id) => ({
    type: REMOVE_FOLLOW,
    followId: id
})

export const createFollow = (userId, follow) => dispatch => {
    
    return FollowAPIUtil.createFollow(userId, follow).then(follow => dispatch(receiveFollow(follow)))
}

export const deleteFollow = (userId) => dispatch => (
    FollowAPIUtil.deleteFollow(userId).then(id => dispatch(removeFollow(id)))
)
