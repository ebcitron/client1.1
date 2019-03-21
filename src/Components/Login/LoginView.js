import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import LoginNavBar from './LoginNavBar';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <LoginNavBar />
                <Switch>
                    <Route exact path="/login"
                        render={(...props) => (
                            <LoginPage
                                handleChange={this.props.handleChange}
                                signIn={this.props.signIn}
                                username={this.state.username}
                                password={this.state.password}
                                {...props} />
                        )} />
                    
                    <Route exact path='/signup' render={(...props) => (
                        <SignUp {...props} />
                    )}
                        />
                </Switch>
            </div>
        );
    }
}


export default LoginView;