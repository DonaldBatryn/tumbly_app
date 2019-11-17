import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
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
            username: this.state.username,
            password: this.state.password
        };

        this.props.createNewUser(user).then(() => {
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
                    <h4 className="session-tumbly-subheader-signup">discover your new thing</h4>
                    <div className="session-inputs-div">
                        <br />
                        <input className="session-input" type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input className="session-input" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br />
                        <input className="session-input" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        
                        <input className="session-submit" type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);