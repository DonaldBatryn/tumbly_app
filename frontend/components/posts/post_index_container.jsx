import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, deletePost, fetchPost } from '../../actions/post_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchUser } from '../../actions/user_actions';
import PostIndex from './post_index';

const msp = state => {
    let user = state.entities.users[state.session.id];
    // debugger
    return ({
        posts: Object.keys(state.entities.posts).map(id => {
            return state.entities.posts[id]
        }),
        currentUser: state.session.id,
        followedUsers: user.followed_users.map(user => user.id)
    
    })
}

const mdp = dispatch => {
    return ({
        fetchPosts: (page) => dispatch(fetchPosts(page)),
        fetchPost: id => dispatch(fetchPost(id)),
        fetchUser:(id) => dispatch(fetchUser(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        createComment: (postId, comment) => dispatch(createComment(postId, comment)),
        deleteComment: id => dispatch(deleteComment(id)),
        createLike: (postId, like) => dispatch(createLike(postId, like)),
        deleteLike: id => dispatch(deleteLike(id)),
        createFollow: (userId, follow) => dispatch(createFollow(userId, follow)),
        deleteFollow: (userId) => dispatch(deleteFollow(userId))
    })
}

export default withRouter(connect(msp, mdp)(PostIndex))