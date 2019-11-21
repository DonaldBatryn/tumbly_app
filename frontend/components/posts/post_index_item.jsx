import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            body: "",
            msg: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.revealComments = this.revealComments.bind(this);
    }

    handleDelete(postId) {
        this.props.deletePost(postId).then(res => {
            this.setState({})
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.post.comments !== prevProps.post.comments) {
            this.setState({ body: "" })
        }
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

    revealComments(){
        let commentsCont = document.getElementById(`post-comments-${this.props.post.id}`);
        if (commentsCont.style.display === 'none') {
            commentsCont.style.display = "flex";
        } else {
            commentsCont.style.display = "none";            
        }
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

        let that = this;
        let postComments = this.props.post.comments.map(com => {
            let deleteComButton = "";
            if (parseInt(com.user_id) === that.props.currentUser){
            
                deleteComButton = <button className="com-delete-btn" onClick={() => {
                    this.props.deleteComment(com.id).then((res) => this.props.fetchPost(this.props.post.id))
                    
                }}>&times;</button>
            } 
            return <li className="comment-li" key={com.id}>
                <div className="comment-left">
                    <h6>{com.body}</h6>
                    <h6>{com.created_at.slice(0, 10)}</h6>
                </div>
                <div className="comment-right">
                    {deleteComButton}
                </div>
                </li>
        })
        
       
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
                                    <button onClick={() => this.revealComments()} className="no-border-btn"><i className="fa fa-comment"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-retweet"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-heart"></i></button>
                                </div>
                            </div>
                            <div id={`post-comments-${this.props.post.id}`} className="comments-container">
                                <ul className="comments-ul">{postComments}</ul>
                                <form className="comment-form" onSubmit={this.handleSubmit}>
                                    <div className="form-error">{this.state.msg}</div>
                                    <input type="text" value={this.state.body} onChange={this.update('body')} />
                                    <input type="submit" value="Post Comment"/>
                                </form>
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
                                    <button onClick={() => this.revealComments()} className="no-border-btn"><i className="fa fa-comment"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-retweet"></i></button>
                                    <button className="no-border-btn"><i className="fa fa-heart"></i></button>
                                </div>
                            </div>
                            <div id={`post-comments-${this.props.post.id}`} className="comments-container hidden">
                                <ul className="comments-ul">{postComments}</ul>
                                <form className="comment-form" onSubmit={this.handleSubmit}>
                                    <div className="form-error">{this.state.msg}</div>
                                    <input type="text" value={this.state.body} onChange={this.update('body')}/>
                                    <input type="submit" value="Post Comment" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}

export default PostIndexItem;