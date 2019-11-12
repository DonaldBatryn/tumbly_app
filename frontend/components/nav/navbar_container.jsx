import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
import NavBar from './navbar';

const msp = state => ({
    loggedIn: Boolean(state.session.id)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (type) => dispatch(openModal(type))
})

export default connect(msp, mdp)(NavBar);