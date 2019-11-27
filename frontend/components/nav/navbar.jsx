import React from 'react';
import Search from '../search/search';
import { Link } from 'react-router-dom'
import posed from 'react-pose';

const ComingSoon = posed.div({
    visible: { opacity: 1, transition: { duration: 500 } },
    hidden: { opacity: 0, transition: { duration: 500 } }
})


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comingSoonisVisible: false
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleMsg - this.handleMsg.bind(this);
    }

    handleMsg(){
        let comingSoon = document.getElementsByClassName('coming-soon-msg')[0]
        let styles = window.getComputedStyle(comingSoon);
        if (styles.display === 'none') comingSoon.style.display = 'flex';
        this.setState({ comingSoonisVisible: true })
        setTimeout(() => {
            this.setState({ comingSoonisVisible: false })
            comingSoon.style.display = 'none';
        }, 2200)
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
                        <button className="nav-icon" onClick={() => this.handleMsg()}><i className="myicon fa fa-compass"></i></button>
                        <button className="nav-icon" onClick={() => this.handleMsg()}><i className="myicon fa fa-envelope"></i></button>
                        <button className="nav-icon" onClick={() => this.handleMsg()}><i className="myicon fa fa-comment"></i></button>
                        <button className="nav-icon" onClick={() => this.handleMsg()}><i className="myicon fa fa-bolt"></i></button>
                        <button className="nav-icon" onClick={() => this.props.openModal('Profile')}><i className="myicon fa fa-user"></i></button>
                        {/* <ComingSoon className="coming-soon-msg" pose={this.state.comingSoonisVisible ? 'visible' : 'hidden'}>
                            <h1 className="coming-soon-txt">Feature coming soon!</h1>
                        </ComingSoon> */}
                        <ComingSoon className="coming-soon-msg" pose={this.state.comingSoonisVisible ? 'visible' : 'hidden'}>
                            <div className="text-box-comingsoon">
                            <h1 className="coming-soon-txt">Feature coming soon!</h1>

                            </div>
                        </ComingSoon>
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