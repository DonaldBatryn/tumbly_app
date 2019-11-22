import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import posed from 'react-pose';

const Slide2Box1 = posed.div({
    visible: { left: 10, bottom: 250, transition: { duration: 300 } },
    hidden: { left: -1500, bottom: 250 }
})

const Slide2Box2 = posed.div({
    visible: { right: 10, bottom: 230, transition: { duration: 300 } },
    hidden: { right: -1500, bottom: 230 }
})

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashClass1: "",
            splashClass2: "",
            splashClass3: "",
            splashClass4: "",
            splashClass5: "",
            slide2isVisible: false
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
            this.setState({ splashClass1: 'scroll-down', slide2isVisible: false });
        } else {
            this.setState({ splashClass1: 'scroll-one' });
            setTimeout(() => {
                this.setState({ slide2isVisible: true })
            }, 700)
            
        }
        
    }

    handleWheel2(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass1: 'scroll-down', slide2isVisible: false  });
            console.log('trig')
        } else {
            this.setState({ splashClass2: 'scroll-two', slide2isVisible: false });
        }
    }

    handleWheel3(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass2: 'scroll-down'  });
            setTimeout(() => {
                this.setState({ slide2isVisible: true })
            }, 700)
        } else {
            this.setState({ splashClass3: 'scroll-three', slide2isVisible: true });
        }
    }

    handleWheel4(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass3: 'scroll-down', slide2isVisible: false  });
        } else {
            this.setState({ splashClass4: 'scroll-four' });
        }
    }

    handleWheel5(e) {
        e.stopPropagation();
        if (e.deltaY < 0) {
            this.setState({ splashClass4: 'scroll-down', slide2isVisible: false  });
        } else {
            this.setState({ splashClass5: 'scroll-five' });
        }
    }

    render() {
    
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
                    {/* <div className="session-tumbly-header">Floater</div> */}
                    <Slide2Box1 className="splash2-box-1" pose={this.state.slide2isVisible ? 'visible' : 'hidden'} >
                        <h1 className="splash2-tumbly-header">Tumbly is so much like Tumblr, I get confused sometimes!</h1>
                    </Slide2Box1>
                    <Slide2Box2 className="splash2-box-2" pose={this.state.slide2isVisible ? 'visible' : 'hidden'}>
                        <p className="splash2-tumbly-subheader">I wanted to practice my full-stack chops, and really admire the Tumblr platform for its utility and it's incredible CSS. This project is probably my favorite app I've made!</p>
                    </Slide2Box2 >
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