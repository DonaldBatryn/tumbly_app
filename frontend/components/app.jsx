import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from './splash/splash';
import Dashboard from './dashboard/dashboard';
import Modal from './modal/modal';


const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <AuthRoute path="/" component={SplashContainer} />
        <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
)

export default App;