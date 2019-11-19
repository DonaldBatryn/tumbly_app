import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
    let userId = state.session.id
    let currentUser = state.entities.users[userId]
    return ({
        currentUser,
        post: {
            title: "",
            body: "",
            post_type: 'quote'
        }
    })
}

const mdp = dispatch => {
    return ({
        createPost: post => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

class CreateQuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            post_type: 'quote',
            msg: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateQuote = this.updateQuote.bind(this);
        this.handleTrim = this.handleTrim.bind(this);
    }

    updateQuote(e){
        this.setState({ title: e.target.value })
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleTrim(str) {
        let stopIdx;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '&') {
                continue;
            } else {
                stopIdx = i
                break;
            }
        }
        return str.slice(0, stopIdx)
    }

    handleSubmit(e) {
        e.preventDefault();
        let quoteDiv = document.getElementsByClassName('inner-quote-form')[0]
        let sourceDiv = document.getElementsByClassName('inner-quote-source')[0]
        if (sourceDiv.innerHTML === "" && quoteDiv.innerHTML === "") {
            this.setState({ msg: 'Post can\'t be blank'})
            return
        }
        let trimmedQuote = this.handleTrim(quoteDiv.innerHTML)
        let trimmedSource = this.handleTrim(sourceDiv.innerHTML)
        
        this.props.createPost({
            title: trimmedQuote,
            body: trimmedSource,
            post_type: 'quote',
            user_id: this.props.currentUser.id
        }).then(
            this.setState({
                title: "",
                body: ""
                
            })
        ).then(() => this.props.closeModal())
    }
    
    render() {
        let { currentUser, closeModal } = this.props


        return (
            <div className="modal is-open">
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <h5 className="text-form-username">{currentUser.username}</h5>
                    <div className="text-input-fields">

                        <div className="quote-form-title"><div className="inner-quote-form" contentEditable="true" ></div></div>

                        <div className="quote-form-body" ><div className="inner-quote-source" contentEditable="true"></div></div>
                    </div>
                    <div className="form-error">{this.state.msg}</div>
                    <div className="text-form-buttons">
                        <h4 className="text-form-close" onClick={closeModal}>Close</h4>
                        <input className="text-form-submit" type="submit" value="Post" />
                    </div>
                </form>
                <div className="modal-screen js-modal-close" onClick={closeModal}></div>
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(CreateQuoteForm));