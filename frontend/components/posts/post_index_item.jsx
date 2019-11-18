import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null}
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(postId) {
        this.props.deletePost(postId).then(res => {
            this.setState({})
        })
    }

    componentDidMount() {
        this.props.fetchUser(this.props.post.user_id).then(user => {
            this.setState({ user: user.user })
        })
    }

    render() {
        
        if (!this.state.user) return <div className="post-index-item">Loading...</div>
        let images = "";
        
        if (this.props.post.imageUrls) {
            images = this.props.post.imageUrls.map(url => {
                return <li key={url}><img className="post-image" src={url} alt="userImage"/></li>
            })
        }
        let followBtn = this.props.post.user_id === this.props.currentUser ? "" : (
            <button className="post-follow-btn">Follow</button>
        )
        let userImage = this.state.user.imageUrl ? this.state.user.imageUrl : "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"

        let deleteButton = ""
        if (this.props.currentUser === this.props.post.user_id) {
            deleteButton = <button onClick={() => this.props.deletePost(this.props.post.id)} className="delete">&times;</button>
        }
        if (this.props.post.post_type === 'quote') {
            return (
                <div className="post-index-item">

                    <span className="page-fold"><div className="border-square"></div></span>
                    <div className="shown-post">
                        <div className="user-post-avatar">
                            <img className="avatar-img" src={userImage} />
                        </div>
                        <div className="post-data">
                            <div className="user-post-info">
                                <h4>A post by:&nbsp;&nbsp;{this.state.user.username}</h4>
                                {followBtn}

                            </div>
                            
                            <div className="post-text">
                                <h3 className="post-title">&ldquo;{this.props.post.title}&rdquo;</h3>
                                <h3 className="post-body">-&nbsp;{this.props.post.body}</h3>
                            </div>
                            <div className="user-action-buttons">
                                <div className="user-action-left">
                                    {deleteButton}
                                </div>
                                <div className="user-action-right">
                                    <button className="no-border-btn"><i className="fa fa-paper-plane"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-comment"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-retweet"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="post-index-item">
    
                    <span className="page-fold"><div className="border-square"></div></span>
                    <div className="shown-post">
                        <div className="user-post-avatar">
                            <img className="avatar-img" src={userImage} />
                        </div>
                        <div className="post-data">
                            <div className="user-post-info">
                                <h4>A post by:&nbsp;&nbsp;{this.state.user.username}</h4>
                                {followBtn}
                                
                            </div>
                            <ul className="image-ul">{images}</ul>
                            <div className="post-text">
                                <h3 className="post-title">{this.props.post.title}</h3>
                                <h3 className="post-body">{this.props.post.body}</h3>
                            </div>
                            <div className="user-action-buttons">
                                <div className="user-action-left">
                                    {deleteButton}
                                </div>
                                <div className="user-action-right">
                                    <button className="no-border-btn"><i className="fa fa-paper-plane"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-comment"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-retweet"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default PostIndexItem;