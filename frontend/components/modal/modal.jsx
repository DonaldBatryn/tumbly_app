import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateTextForm from '../posts/create_text_form';
import CreatePhotoForm from '../posts/create_photo_form';
import ProfileContainer from '../users/profile';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'Text':
            component = <CreateTextForm />;
            break;
        case 'Photo':
            component = <CreatePhotoForm />;
            break;
        case 'Profile':
            component = <ProfileContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-screen" onClick={closeModal}>
            <div className="modal-form" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = state => {
    return ({
        modal: state.ui.modal
    })
}

const mdp = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(msp, mdp)(Modal);