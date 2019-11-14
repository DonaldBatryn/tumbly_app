import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from'../../actions/user_actions';

const msp = state => {
    let userId = state.session.id
    return ({
        currentUser: state.entities.users[userId],
        userId: state.session.id
    })
}

const mdp = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
        updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
    })
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.currentUser.username,
            imageUrl: "",
            imageFile: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handlePreview(e) {
        e.persist()
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file })
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, imageFile } = this.state;
        const { userId } = this.props;
        const formData = new FormData();

        formData.append('user[username]', username);
        formData.append('user[image]', imageFile);
       
        this.props.updateUser(userId, formData)
            .then(() => this.props.closeModal())
    }

    render(){
        let { closeModal, userId } = this.props;
        let imagePreview;
        if (this.state.imageUrl === "") {
            imagePreview = <div className="dummy-img"></div>
        } else {
            imagePreview = <img className="image-preview" src={this.state.imageUrl} alt="image-preview" />
        }
       
        return (
            <div>
                <div className="modal is-open user-profile-container">
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <h6>You can edit your Username, if you'd like:</h6>
                        <div className="text-input-fields">
                            <input className="text-form-title" 
                                type="text" 
                                onChange={this.update('username')} 
                                value={this.state.username}/>

                            <div className="image-div">
                            {imagePreview}
                            <h3 className="drag-drop-msg">Add an avatar image</h3>
                            <input className="avatar-form-file" 
                                id="ff-2"
                                type="file" 
                                size="1000"
                                // direct_upload
                                name="image" 
                                onChange={this.handlePreview} />
                            </div>
                        </div>
                        <div className="text-form-buttons">
                            <h4 className="text-form-close" onClick={closeModal}>Close</h4>
                            <input className="text-form-submit" type="submit" value="Save"/>
                        </div>
                    </form>
                </div>
                <div className="modal-screen js-modal-close" onClick={closeModal}></div>
            </div>
        )
    }
}

export default connect(msp, mdp)(Profile);