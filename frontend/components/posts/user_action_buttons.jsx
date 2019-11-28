import React from 'react';
import posed from 'react-pose';

const ComingSoon = posed.div({
    visible: { opacity: 1, transition: { duration: 500 } },
    hidden: { opacity: 0, transition: { duration: 500 } }
})

class ActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedByCurrentUser: false,
            comingSoonisVisible: false
        }
        this.handleLike = this.handleLike.bind(this);
        this.revealComments = this.revealComments.bind(this);
        this.handleMsg = this.handleMsg.bind(this);
    }

    componentDidMount() {
        this.props.post.likes.forEach(like => {
            if (like.userId === this.props.currentUser) {
                this.setState({ likedByCurrentUser: true })
            }
        })
    }

    handleMsg() {
        console.log('begin')
        let comingSoon = document.getElementById(this.props.post.id)
        let styles = window.getComputedStyle(comingSoon);
        if (styles.display === 'none') comingSoon.style.display = 'flex';
        this.setState({ comingSoonisVisible: true })
        setTimeout(() => {
            console.log('timeout')
            this.setState({ comingSoonisVisible: false })
            comingSoon.style.display = 'none';
        }, 2200)
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
        let numCommentsIcon = this.props.numComments;
        let numLikesIcon = this.props.numLikes;
        if (this.props.numComments === 0) numCommentsIcon = ""
        if (this.props.numLikes === 0) numLikesIcon = ""
        
        return (
            <div className="user-action-buttons">
                <div className="user-action-left">
                    {deleteButton}
                </div>
                <div className="user-action-right">
                    <button onClick={() => this.handleMsg()} className="no-border-btn"><i className="fa fa-paper-plane"></i></button>
                    <button onClick={() => this.revealComments()} className="no-border-btn"><i className="fa fa-comment"></i></button>
                    <h6 className="comment-count">{numCommentsIcon}</h6>
                    <button onClick={() => this.handleMsg()} className="no-border-btn"><i className="fa fa-retweet"></i></button>
                    {heartIcon}
                    <h6 className="like-count">{numLikesIcon}</h6>
                </div>
                <ComingSoon id={this.props.post.id} className="coming-soon-msg" pose={this.state.comingSoonisVisible ? 'visible' : 'hidden'}>
                    <div className="text-box-comingsoon">
                        <h1 className="coming-soon-txt">Feature coming soon!</h1>
                    </div>
                </ComingSoon>
            </div>
        )
    }
}

export default ActionButtons;