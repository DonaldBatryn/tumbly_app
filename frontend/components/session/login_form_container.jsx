import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
    return {
        errors: state.errors.session
    };
};

const mdp = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default withRouter(connect(msp, mdp)(LoginForm));