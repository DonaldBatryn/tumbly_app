import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, deletePost, fetchPost } from '../../actions/post_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import PostIndex from './post_index';

const msp = state => {
    return ({
        posts: Object.keys(state.entities.posts).map(id => {
            return state.entities.posts[id]
        }),
        currentUser: state.session.id
    
    })
}

const mdp = dispatch => {
    return ({
        fetchPosts: (page) => dispatch(fetchPosts(page)),
        fetchPost: id => dispatch(fetchPost(id)),
        fetchUser:(id) => dispatch(fetchUser(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        createComment: (postId, comment) => dispatch(createComment(postId, comment)),
        deleteComment: id => dispatch(deleteComment(id))
        
    })
}

export default withRouter(connect(msp, mdp)(PostIndex))