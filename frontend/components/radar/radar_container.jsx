import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchUsers } from '../../actions/user_actions'
import Radar from './radar';

const msp = state => {
    let length = Object.keys(state.entities.users).length
    let randIdx = Math.floor((Math.random() * 10) % length)
    if (Object.keys(state.entities.users)[randIdx] === state.session.id){
        randIdx = (randIdx + 1) % length 
    }
    let user = state.entities.users[Object.keys(state.entities.users)[randIdx]]
    
    return ({
        user
      
    })
}

const mdp = dispatch => {
    return ({
        // follow action?
        // fetchUsers: () => dispatch(fetchUsers())
    })
}

export default withRouter(connect(msp, mdp)(Radar))