import React from 'react';

// takes props deleteButton:boolean, numComments:int, numLikes:int
// ... deletePost:f(), post:this.props.post
class ActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedByCurrentUser: false
        }
        this.handleLike = this.handleLike.bind(this);
        this.revealComments = this.revealComments.bind(this);
    }

    componentDidMount() {
        this.props.post.likes.forEach(like => {
            if (like.userId === this.props.currentUser) {
                console.log('got into check it match condish')
                this.setState({ likedByCurrentUser: true })
            }
        })
    }

    revealComments() {
        let commentsCont = document.getElementById(`post-comments-${this.props.post.id}`);
        let styles = window.getComputedStyle(commentsCont);
        if (styles.display === "none") {
            commentsCont.style.display = "flex";
        } else {
            commentsCont.style.display = "none";
        }
    }

    handleLike() {
        if (this.state.likedByCurrentUser) {
            this.props.post.likes.forEach(like => {
                if (like.userId === this.props.currentUser) {
                    this.props.deleteLike(like.likeId).then(res => {
                        this.setState({ likedByCurrentUser: false })
                        this.props.fetchPost(this.props.post.id)
                    }) 
                }
            })
        } else {
            let like = { post_id: this.props.post.id }
            this.props.createLike(this.props.post.id, like).then(res => {
                this.setState({ likedByCurrentUser: true })
                this.props.fetchPost(this.props.post.id)
            })
        }
    }

    render(){
        let deleteButton = this.props.deleteButton ? (
            <button onClick={() => this.props.deletePost(this.props.post.id)} className="delete">&times;</button>
        ) : ""

        let heartIcon = this.state.likedByCurrentUser ? (
            <button onClick={this.handleLike} className="no-border-btn liked-heart"><i className="fa fa-heart"></i></button>
        ) : (
                <button onClick={this.handleLike} className="no-border-btn" > <i className="fa fa-heart"></i></button>
            )
       
        
        return (
            <div className="user-action-buttons">
                <div className="user-action-left">
                    {deleteButton}
                </div>
                <div className="user-action-right">
                    <button className="no-border-btn"><i className="fa fa-paper-plane"></i></button>
                    <button onClick={() => this.revealComments()} className="no-border-btn"><i className="fa fa-comment"></i></button>
                    <h6 className="comment-count">{this.props.numComments}</h6>
                    <button className="no-border-btn"><i className="fa fa-retweet"></i></button>
                    {heartIcon}
                    <h6 className="like-count">{this.props.numLikes}</h6>
                </div>
            </div>
        )
    }
}

export default ActionButtons;