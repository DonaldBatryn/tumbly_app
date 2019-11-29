import React from 'react';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = state => {
    let user = state.entities.users[state.session.id];
    
    return ({
        followedUsers: user.followed_users.map(user => user.id),
        currentUser: state.session.id
    })
}

const mdp = dispatch => {
    return ({
        fetchPost: id => dispatch(fetchPost(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        createFollow: (userId, follow) => dispatch(createFollow(userId, follow)),
        deleteFollow: (userId) => dispatch(deleteFollow(userId))
    })
}

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            followedUsers: this.props.followedUsers,
            isFollowingUser: false
        }
        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidMount() {
        let that = this;
        this.props.fetchUser(this.props.currentUser).then(user => {
            user.user.followed_users.forEach(user => {
                if (user.id === that.props.post.user_id) {
                    this.setState({ isFollowingUser: true, user: user.user })
                }
            })
        })
    }

    componentDidUpdate(prevProps) {
        let that = this;
        if (prevProps.followedUsers !== this.props.followedUsers) {
           this.setState({ followedUsers: this.props.followedUsers })
        }
        this.state.followedUsers.forEach(user => {
            if (user.id === that.props.post.user_id) {
                this.setState({ isFollowingUser: true })
            }
        })
    }

    handleFollow() {
        if (this.state.isFollowingUser) {
            this.props.deleteFollow(this.props.post.user_id).then(res => {
                // this.props.fetchPost(this.props.post.id)
                this.props.fetchUser(this.props.currentUser)
                this.setState({ isFollowingUser: false })
            })
        } else {
            let follow = { follower_id: this.props.currentUser, followee_id: this.props.post.user_id }
            this.props.createFollow(this.props.post.user_id, follow).then(res => {
                // this.props.fetchPost(this.props.post.id)
                this.props.fetchUser(this.props.currentUser)
                this.setState({ isFollowingUser: true })
            })
        }
    }

    render() {
        if (this.state.isFollowingUser) {
            return (
                <button onClick={this.handleFollow} className="post-follow-btn">Unfollow</button>   
            )
        } else {
            return (
                <button onClick={this.handleFollow} className="post-follow-btn">Follow</button>
            )
        }
    }
}

export default connect(msp, mdp)(FollowButton);