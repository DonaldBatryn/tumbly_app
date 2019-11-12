import React from 'react';
import { withRouter } from 'react-router-dom';


class PostCreatePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidUpdate(prevProps){
        if (prevProps.currentUser.imageUrl !== this.props.currentUser.imageUrl) {
          
            this.setState({})
        }
    }

    render() {
        let { openModal, currentUser } = this.props
        let userImage;
        if (currentUser.imageUrl) {
            userImage = currentUser.imageUrl
        } else {
            userImage = "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"
        }
        return (
            <div className="create-panel-form-container">
                <div className="create-panel-container">
                    <div className="avatar-container">
                        <div className="create-panel-avatar">
                            <img className="create-panel-img" src={userImage} alt="user avatar"/>

                        </div>
                    </div>

                    <div className="create-options-bar">
                        <div className="create-panel-option" onClick={() => openModal('Text')}>
                            <img className="create-panel-pic" src={window.textButton} alt="Text" />
                            <h3 className="create-panel-text">Text</h3>
                        </div>
                        <div className="create-panel-option" onClick={() => openModal('Photo')}>
                            <img className="create-panel-pic" src={window.photoButton} alt="imageupload" />
                            <h3 className="create-panel-text">Photo</h3>
                        </div>
                        <div className="create-panel-option">
                            <img className="create-panel-pic" src={window.quoteButton} alt="Quote" />
                            <h3 className="create-panel-text">Quote</h3>
                        </div>
                        <div className="create-panel-option">
                            <img className="create-panel-pic" src={window.linkButton} alt="Link" />
                            <h3 className="create-panel-text">Link</h3>
                        </div>
                        <div className="create-panel-option">
                            <img className="create-panel-pic" src={window.chatButton} alt="Chat" />
                            <h3 className="create-panel-text">Chat</h3>
                        </div>
                        <div className="create-panel-option">
                            <img className="create-panel-pic" src={window.audioButton} alt="Audio" />
                            <h3 className="create-panel-text">Audio</h3>
                        </div>
                        <div className="create-panel-option">
                            <img className="create-panel-pic" src={window.videoButton} alt="Video" />
                            <h3 className="create-panel-text">Video</h3>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default withRouter(PostCreatePanel);