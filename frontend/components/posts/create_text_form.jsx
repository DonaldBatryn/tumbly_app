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
            post_type: 'text'
        }
    })
}

const mdp = dispatch => {
    return ({
        createPost: post => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

class CreateTextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state).then(
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
                        <input className="text-form-title"
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title" />

                        <textarea className="text-form-body"
                            type="text"
                            value={this.state.body}
                            onChange={this.update('body')}
                            placeholder="Your text here" />
                    </div>
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

export default withRouter(connect(msp, mdp)(CreateTextForm));