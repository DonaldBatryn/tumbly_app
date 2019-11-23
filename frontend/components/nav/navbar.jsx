import React from 'react';
import Search from '../search/search';
import { Link } from 'react-router-dom'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-main-loggedIn">
                    <div className="navbar-left">
                        {/* <Link className="t-logo-link" to="/dashboard"><strong>t</strong></Link> */}
                        <Link className="t-logo-link" to="/dashboard"><i className="fa fa-tumblr"></i></Link>
                       
                        <Search />
                    </div>
                    <div className="navbar-center">
                        <Link className="nav-icon" to="/dashboard"><i className="myicon fa fa-home"></i></Link>
                        <Link className="nav-icon" to="/dashboard"><i className="myicon fa fa-compass"></i></Link>
                        <Link className="nav-icon" to="/dashboard"><i className="myicon fa fa-envelope"></i></Link>
                        <Link className="nav-icon" to="/dashboard"><i className="myicon fa fa-comment"></i></Link>
                        <Link className="nav-icon" to="/dashboard"><i className="myicon fa fa-bolt"></i></Link>
                        <button className="nav-icon" onClick={() => this.props.openModal('Profile')}><i className="myicon fa fa-user"></i></button>
                    </div>
                    <div className="navbar-right">
                        <button className="logout-button" onClick={this.logoutUser}>Logout</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-main">
                    <div className="navbar-left">
                        <Link className="t-logo-link" to="/dashboard"><i className="fa fa-tumblr"></i></Link>
                    </div>
                    <div className="navbar-right">
                        <Link className="nav-login-button" to={'/login'}>Log in</Link>
                        <Link className="nav-signup-button" to={'/register'}>Sign up</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        
        return (
            <div className="navbar-container">
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;