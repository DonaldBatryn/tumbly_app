import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostCreatePanel from './post_create_panel';
import { openModal } from "../../actions/modal_actions"

const msp = state => {
    let userId = state.session.id
    return ({
        userId: userId,
        currentUser: state.entities.users[userId]
    })
}

const mdp = dispatch => {
    return ({
        openModal: (type) => dispatch(openModal(type))
    })
}

export default withRouter(connect(msp, mdp)(PostCreatePanel))