import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Recommended from './recommended';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(Recommended))