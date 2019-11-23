import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(() => {

            this.props.history.push("/dashboard")
        })
    }

    handleDemo(e) {
        e.preventDefault();

        let user = {
            email: 'guest@tumbly.com',
            password: '123456'
        }
        this.props.login(user).then(() => {

            this.props.history.push("/dashboard")
        })
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h1 className="session-tumbly-header">tumbly</h1>
                    <h4 className="session-tumbly-subheader">welcome back, did you miss me?</h4>
                    <div className="session-inputs-div">
                        <input className="session-input" type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input className="session-input" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input className="session-submit" type="submit" value="Submit" onSubmit={this.handleSubmit}/>
                        {/* <button className="session-submit" >Demo Login</button> */}
                        {this.renderErrors()}
                        <button className="session-submit demo-btn" onClick={this.handleDemo}>Try tumbly as a Guest</button>
                    </div>
                </form>
                <div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);