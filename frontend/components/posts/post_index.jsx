import React from 'react';
import PostIndexItem from './post_index_item';
import { Waypoint } from 'react-waypoint';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            loaded: false,
            posts: [],
            totalLength: this.props.posts.length,
            dots: false
        }
        this.getPosts = this.getPosts.bind(this)
    }

    getPosts() {
        this.setState({ dots: true })
        setTimeout(1000)
        this.props.fetchPosts(this.state.page);
        this.setState({ page: this.state.page += 1, dots: false })
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.setState({ page: this.state.page += 1, loaded: true })
    }
    
    componentDidUpdate(prevProps) {
        if (!this.state.loaded) window.scrollTo(0, 0);
        if (this.props.posts !== prevProps.posts) {
            this.setState({ page: this.state.page, posts: this.props.posts })
        }
    }

    render() {
        let dots = (
            <ul className="loading-dots">
                <li className="dot-1"></li>
                <li className="dot-2"></li>
                <li className="dot-3"></li>
            </ul>
        )
      
  
        let allPosts = [];
        for (let i = this.props.posts.length - 1; i >= 0; i--) {
   
            let post = this.props.posts[i]
            allPosts.push(
            <li key={post.id} className="post-index-li">
                <PostIndexItem 
                    post={post} 
                    fetchUser={this.props.fetchUser} 
                    fetchPost={this.props.fetchPost}
                    currentUser={this.props.currentUser} 
                    deletePost={this.props.deletePost}
                    createComment={this.props.createComment}
                    deleteComment={this.props.deleteComment}
                    createLike={this.props.createLike}
                    deleteLike={this.props.deleteLike}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />
            </li>) 
        }
        if (!this.state.loaded) window.scrollTo(0, 0);

        return (
            <div className="post-index-container">
                <ul className="post-index-ul">
                    {allPosts}
                </ul>
                {/* {dots} */}
                <Waypoint onEnter={this.getPosts} />
            </div>
        )
    }
}

export default PostIndex;
