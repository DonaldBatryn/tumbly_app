import React from 'react';
import { withRouter } from 'react-router-dom';
import posed from 'react-pose';

const ComingSoon = posed.div({
    visible: { opacity: 1, transition: { duration: 500 } },
    hidden: { opacity: 0, transition: { duration: 500 } }
})

class PostCreatePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comingSoonisVisible: false
        }
        this.handleMsg = this.handleMsg.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentUser.imageUrl !== this.props.currentUser.imageUrl) {
            this.setState({})
        }
    }

    handleMsg() {
        console.log('here')
        let comingSoon = document.getElementById('post-button-comingsoon')
        let styles = window.getComputedStyle(comingSoon);
        if (styles.display === 'none') comingSoon.style.display = 'flex';
        this.setState({ comingSoonisVisible: true })
        setTimeout(() => {
            this.setState({ comingSoonisVisible: false })
            comingSoon.style.display = 'none';
        }, 2200)
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
                        <div className="create-panel-option" onClick={() => openModal('Quote')}>
                            <img className="create-panel-pic" src={window.quoteButton} alt="Quote" />
                            <h3 className="create-panel-text">Quote</h3>
                        </div>
                        <div className="create-panel-option" onClick={() => this.handleMsg()}>
                            <img className="create-panel-pic" src={window.linkButton} alt="Link" />
                            <h3 className="create-panel-text">Link</h3>
                        </div>
                        <div className="create-panel-option" onClick={() => this.handleMsg()}>
                            <img className="create-panel-pic" src={window.chatButton} alt="Chat" />
                            <h3 className="create-panel-text">Chat</h3>
                        </div>
                        <div className="create-panel-option" onClick={() => this.handleMsg()}>
                            <img className="create-panel-pic" src={window.audioButton} alt="Audio" />
                            <h3 className="create-panel-text">Audio</h3>
                        </div>
                        <div className="create-panel-option" onClick={() => this.handleMsg()}>
                            <img className="create-panel-pic" src={window.videoButton} alt="Video" />
                            <h3 className="create-panel-text">Video</h3>
                        </div>
                    </div>

                </div>
                <ComingSoon id="post-button-comingsoon" className="coming-soon-msg" pose={this.state.comingSoonisVisible ? 'visible' : 'hidden'}>
                    <div className="text-box-comingsoon">
                        <h1 className="coming-soon-txt">Feature coming soon!</h1>
                    </div>
                </ComingSoon>
            </div>
        )
    }
}

export default withRouter(PostCreatePanel);