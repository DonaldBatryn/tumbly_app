import React from 'react';
import ActionButtons from './user_action_buttons';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            body: "",
            msg: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value })
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.post.user_id).then(user => {
            this.setState({ user: user.user })
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body === "") {
            this.setState({ msg: 'Comment can\'t be blank' });
            return;
        }
        let postId = this.props.post.id
        let comment = {
            body: this.state.body,
            post_id: postId
        }
        this.props.createComment(postId, comment).then(res => {
            this.setState({ body: ""})
            this.props.fetchPost(postId)
        })
    }

    render() {
        if (!this.state.user) return <div className="post-index-item">Loading...</div>
        let images = "";
        let imageUl = "";
        if (this.props.post.imageUrls) {
            images = this.props.post.imageUrls.map(url => {
                return <li key={url}><img className="post-image" src={url} alt="userImage"/></li>
            })
            imageUl = <ul className="image-ul">{images}</ul>
        }

        let followBtn = this.props.post.user_id === this.props.currentUser ? "" : (
            <button className="post-follow-btn">Follow</button>
        )

        let userImage = this.state.user.imageUrl ? this.state.user.imageUrl : "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"

        let that = this;
        let postComments = this.props.post.comments.map(com => {
            let deleteComButton = "";
            let comImage = com.authorPic ? com.authorPic : "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"
         
            if (parseInt(com.user_id) === that.props.currentUser){
                
                deleteComButton = <button className="com-delete-btn" onClick={() => {
                    this.props.deleteComment(com.id).then((res) => this.props.fetchPost(this.props.post.id))
                    
                }}>&times;</button>
            } 
            return <li className="comment-li" key={com.id}>
                <div className="comment-left">
                    <img className="comment-image" src={comImage} alt={`${com.author}`}/>
                    <h6>{com.body}</h6>
                </div>
                <div className="comment-right">
                    {deleteComButton}
                </div>
                </li>
        })

        let mainBody;
        if (this.props.post.post_type === 'quote') {
            mainBody = (
                <div className="post-text">
                    <h3 className="post-title">&ldquo;{this.props.post.title}&rdquo;</h3>
                    <h3 className="post-body">-&nbsp;{this.props.post.body}</h3>
                </div>
            )
        } else {
            mainBody = (
                <div className="post-text">
                    <h3 className="post-title">{this.props.post.title}</h3>
                    <h3 className="post-body">{this.props.post.body}</h3>
                </div>
            )
        }

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

                        {imageUl}
                        {mainBody}

                        <ActionButtons
                            post={this.props.post} createLike={this.props.createLike}
                            deleteLike={this.props.deleteLike} fetchPost={this.props.fetchPost}
                            currentUser={this.props.currentUser} deletePost={this.props.deletePost}
                            deleteButton={this.props.currentUser === this.props.post.user_id}
                            numComments={this.props.post.comments.length} numLikes={this.props.post.likes.length}
                        />
                        <div id={`post-comments-${this.props.post.id}`} className="comments-container">
                            <ul className="comments-ul">{postComments}</ul>
                            <form className="comment-form" onSubmit={this.handleSubmit}>
                                <div className="form-error">{this.state.msg}</div>
                                <input className="comment-input" type="text" value={this.state.body} onChange={this.update('body')} placeholder="Say something about this" />
                                <input className="comment-submit" type="submit" value="Post Comment" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostIndexItem;