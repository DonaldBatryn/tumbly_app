import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import PostIndex from './post_index';

const msp = state => {
    return ({
        posts: Object.keys(state.entities.posts).map(id => {
            return state.entities.posts[id]
        }),
        currentUser: state.session.id,
        // users: Object.keys(state.entities.users).map(id => {
        //     return state.entities.users[id]
        // })
    })
}

const mdp = dispatch => {
    return ({
        fetchPosts: (page) => dispatch(fetchPosts(page)),
        fetchUser:(id) => dispatch(fetchUser(id)),
        // fetchUsers: () => dispatch(fetchUsers())
    })
}

export default withRouter(connect(msp, mdp)(PostIndex))