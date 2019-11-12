import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashClass1: "",
            splashClass2: "",
            splashClass3: "",
            splashClass4: "",
            splashClass5: "",
        }
        this.handleWheel1 = this.handleWheel1.bind(this);
        this.handleWheel2 = this.handleWheel2.bind(this);
        this.handleWheel3 = this.handleWheel3.bind(this);
        this.handleWheel4 = this.handleWheel4.bind(this);
        this.handleWheel5 = this.handleWheel5.bind(this);
    }

    handleWheel1(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass1: 'scroll-down' });
        } else {
            this.setState({ splashClass1: 'scroll-one' });
        }
    }

    handleWheel2(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass1: 'scroll-down' });
        } else {
            this.setState({ splashClass2: 'scroll-two' });
        }
    }

    handleWheel3(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass2: 'scroll-down' });
        } else {
            this.setState({ splashClass3: 'scroll-three' });
        }
    }

    handleWheel4(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass3: 'scroll-down' });
        } else {
            this.setState({ splashClass4: 'scroll-four' });
        }
    }

    handleWheel5(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass4: 'scroll-down' });
        } else {
            this.setState({ splashClass5: 'scroll-five' });
        }
    }

    render() {
        // debugger
        let sessionForm;
        if (this.props.history.location.pathname === "/register") {
            sessionForm = <SignupFormContainer />
        } else {
            sessionForm = <LoginFormContainer />
        }
        return (
            <div className="splash-container">
                <div className={`splash-1 ${this.state.splashClass1}`} onWheel={this.handleWheel1}>
                    {sessionForm}
                </div>
                <div className={`splash-2 ${this.state.splashClass2}`} onWheel={this.handleWheel2}>

                </div>
                <div className={`splash-3 ${this.state.splashClass3}`} onWheel={this.handleWheel3}>

                </div>
                <div className={`splash-4 ${this.state.splashClass4}`} onWheel={this.handleWheel4}>

                </div>
                <div className={`splash-5 ${this.state.splashClass5}`} onWheel={this.handleWheel5}>
                    {sessionForm}
                </div>
            </div>
        )
    }
}

export default withRouter(Splash);