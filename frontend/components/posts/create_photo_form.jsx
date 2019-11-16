import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createImagePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
    let userId = state.session.id
    let currentUser = state.entities.users[userId]
    return ({
        currentUser,
        // post: {
        //     title: "",
        //     body: "",
        //     post_type: 'photo'
        // }
    })
}

const mdp = dispatch => {
    return ({
        createImagePost: post => dispatch(createImagePost(post)),
        closeModal: () => dispatch(closeModal())
    })
}

class CreatePhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            post_type: 'photo',
            images: [],
            imageUrl: "",
            imageFile: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handlePreview(e) {
        e.persist()
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        const files = e.currentTarget.files
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file, images: files })
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, body, post_type, images, imageUrl } = this.state;
        const formData = new FormData();

        formData.append('post[title]', title);
        formData.append('post[body]', body);
        formData.append('post[post_type]', post_type);
        for (let i = 0; i < images.length; i++) {
            formData.append('post[images][]', images[i]);
        }
        this.props.createImagePost(formData)
        .then(
            this.setState({
                title: "",
                body: ""
            })
        ).then(() => this.props.closeModal())
    }

    render() {
        let { currentUser, closeModal } = this.props
        let imagePreview;
        if (this.state.imageUrl === "") {
            imagePreview = <div className="dummy-img"></div>
        } else {
            imagePreview = <img className="image-preview" src={this.state.imageUrl} alt="image-preview" />
        }
        // let dropZone = document.getElementById("ff-1")
        // dropZone.addEventListener("mouseover", () => {
        //     dropZone.classList.add('highlight')
        // })
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

                        
                        <div className="image-div">
                            {imagePreview}
                            <h3 className="drag-drop-msg-2">Add images</h3>
                            <input className="avatar-form-file-2"
                                id="ff-1"
                                name="images"
                                type="file"
                                multiple
                                // direct_upload
                                onChange={this.handlePreview}
                                // onChange={e => this.setState({ images: e.target.files })}
                                placeholder="Choose a picture to share" />
                        </div>
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

// slight change

export default withRouter(connect(msp, mdp)(CreatePhotoForm));